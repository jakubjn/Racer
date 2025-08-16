#!/usr/bin/env python3
import os
from pathlib import Path
import sys
import time
import re

import h2spacex
import json

if getattr(sys, "frozen", True):
    current_dir = os.path.dirname(sys.executable)
else:
    current_dir = Path(__file__).resolve().parent

options = json.load(open(str(current_dir) + '/data.json'))

requests_length = len(options['requests'])

connection = h2spacex.H2OnTlsConnection(
    hostname=options['host'],
    port_number=options['port']
)

connection.setup_connection()

stream_ids_list = connection.generate_stream_ids(number_of_streams=requests_length)

responses = []

all_headers_frames = []
all_data_frames = []

for i in range(0, requests_length):
    request = options['requests'][i]

    if(request['body'] == ""):
        header_frames_without_last_byte, last_data_frame_with_last_byte = connection.create_single_packet_http2_get_request_frames( 
            method=request['method'],
            headers_string=request['headers'],
            scheme='https',
            stream_id=stream_ids_list[i],
            authority=options['host'],
            path=request['path']
        )
    else:
        header_frames_without_last_byte, last_data_frame_with_last_byte = connection.create_single_packet_http2_post_request_frames(  
            method=request['method'],
            headers_string=request['headers'],
            scheme='https',
            stream_id=stream_ids_list[i],
            authority=options['host'],
            path=request['path'],
            body=request["body"]
        )

    all_headers_frames.append(header_frames_without_last_byte)
    all_data_frames.append(last_data_frame_with_last_byte)

# concatenate all headers bytes
temp_headers_bytes = b''
for h in all_headers_frames:
    temp_headers_bytes += bytes(h)

# concatenate all data frames which have last byte
temp_data_bytes = b''
for d in all_data_frames:
    temp_data_bytes += bytes(d)


connection.send_bytes(temp_headers_bytes)

time.sleep(0.1)

connection.send_ping_frame()

connection.send_bytes(temp_data_bytes)

resp = connection.read_response_from_socket(_timeout=5)

parser = h2spacex.h2_frames.FrameParser(h2_connection=connection)
parser.add_frames(resp)

time.sleep(2)

connection.close_connection()

for id in parser.headers_and_data_frames.keys():

    # Headers

    headers = parser.headers_and_data_frames[id]['header']

    try:
        headers = headers.decode("utf-8")
    except:
        headers = headers

    # Body

    data = parser.headers_and_data_frames[id]['data']

    if 'content-encoding: gzip' in headers:
        data = h2spacex.h2_frames.decompress_gzip_data(data)
    elif 'content-encoding: br' in headers:
        data = h2spacex.h2_frames.decompress_br_data(data)
    elif 'content-encoding: deflate' in headers:
        data = h2spacex.h2_frames.decompress_deflate_data(data)

    try:
        data = data.decode("utf-8")
    except:
        data = data

    # Code

    code = re.search(r'status\s(.{3})', headers)
    code = int(code.group(1))

    response = {
        "host":options['host'],
        "code":code,
        "headers":headers,
        "body":data
    }

    responses.append(response)

options['responses'] = responses

with open(str(current_dir) + "/data.json", "w") as f:
    json.dump(options, f, indent=3)

