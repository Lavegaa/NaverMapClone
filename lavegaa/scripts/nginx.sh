#!/bin/bash
sudo cp -rf /home/ubuntu/lavegaa/*  /var/www/lavegaa

sudo systemctl restart nginx
