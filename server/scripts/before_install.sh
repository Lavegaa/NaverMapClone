#!/bin/bash

# Install node.js
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs

node -v
npm -v
# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete