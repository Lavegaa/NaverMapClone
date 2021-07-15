#!/bin/bash
# cd /home/ubuntu/server
# pm2
# npm install pm2 -g
export NVM_DIR="~/.nvm"
[ -s "/home/ubuntu/.nvm/nvm.sh" ] && \. "/home/ubuntu/.nvm/nvm.sh"  # This loads nvm
[ -s "/home/ubuntu/.nvm/bash_completion" ] && \. "/home/ubuntu/.nvm/bash_completion"
npm install pm2@latest -g