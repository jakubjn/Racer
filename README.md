# Racer

A Caido Plugin for finding Race Conditions with the Single Packet Attack. Essentially a wrapper around the 'h2spacex' library in Python.

## Usage

The plugin can be used from both the HTTP History and the Replay Tab. In the Replay Tab, right click on a request, navigate to the Racer Context Window, and press "Queue Request" to queue it. One you have queued all the requests you want to send, simply right click on any request and press "Race" in the same Context Window.

To use the plugin from HTTP History, select two or more requests using Ctrl + Left Click. Right Click on any request you have selected, navigate to the Racer Context Window, and press "Race".

## Requirements

This plugin requires Python 3.x.x along with venv installed on the target system.

Venv comes packaged with Windows/MacOS Python, however on certain Linux distributions it may be missing.

## To Do

- Improve the Editor
- Enable Last-Byte Sync Attack for Different Hosts
