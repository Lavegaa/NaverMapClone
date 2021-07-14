#!/bin/bash

# Install node.js
export NVM_DIR="~/.nvm"
[ -s "/home/ubuntu/.nvm/nvm.sh" ] && \. "/home/ubuntu/.nvm//nvm.sh"  # This loads nvm
[ -s "/home/ubuntu/.nvm//bash_completion" ] && \. "/home/ubuntu/.nvm//bash_completion"

# Install nodemon
# sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete