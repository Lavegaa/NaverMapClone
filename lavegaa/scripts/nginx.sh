#!/bin/bash
sudo cp -rf /home/ubuntu/lavegaa/build/*  /var/www/lavegaa

sudo systemctl restart nginx
