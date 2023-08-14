#!/bin/bash

git pull
chmod +x ./cycle.sh
screen -S site -X quit
screen -S site -d -m node app.js