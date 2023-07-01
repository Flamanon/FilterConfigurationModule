#!/bin/bash

npm install

node server.cjs &
server_pid=$!

sleep 5
start "http://localhost:3000"

echo "Press any key to stop the server..."
read -n 1 -s
kill $server_pid
