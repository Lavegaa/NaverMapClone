#!/bin/bash
cd /home/ubuntu/server

sudo rm -rf ./node_modules

sudo npm install

sudo cp /home/ubuntu/server-env/.env ./

sudo npm run build

