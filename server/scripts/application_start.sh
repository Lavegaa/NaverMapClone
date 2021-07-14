#!/bin/bash
[ -s "/home/ubuntu/.nvm/nvm.sh" ] && \. "/home/ubuntu/.nvm//nvm.sh"  # This loads nvm
[ -s "/home/ubuntu/.nvm//bash_completion" ] && \. "/home/ubuntu/.nvm//bash_completion"
cd /home/ubuntu/server

npm run start