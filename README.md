# Racer

A Caido Plugin for finding Race Conditions with the Single Packet Attack. Essentially a wrapper around the 'h2spacex' library in Python.

## Usage

The plugin can be used from both the HTTP History and the Replay Tab. In the Replay Tab, right click on a request, navigate to the Racer Context Window, and press "Queue Request" to queue it. One you have queued all the requests you want to send, simply right click on any request and press "Race" in the same Context Window.

To use the plugin from HTTP History, select two or more requests using Ctrl + Left Click. Right Click on any request you have selected, navigate to the Racer Context Window, and press "Race".

## Contributing

This repository uses Git LFS, so if you want to download it, you will need to have Git LFS installed. The following commands will work on most Linux Distributions:

```bash
sudo dnf install git-lfs / sudo apt-get install git-lfs
git lfs install
```

If you already installed the repository and want to fetch the files, you can use:

```bash
git lfs fetch --all
git lfs checkout
git lfs pull
```

## To Do

- Improve the Editor
- Enable Last-Byte Sync Attack for Different Hosts
