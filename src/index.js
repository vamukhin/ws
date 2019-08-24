var WebSocketServer = new require('ws');
const express = require('express');
const path = require('path');

import {onMessageHandler} from "./events/on-message"

const PORT = 8081;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

let webSocketServer = new WebSocketServer.Server({
  server
});

global.clients = webSocketServer.clients;

console.log("start listening");

webSocketServer.on('connection', function(ws) {
  console.log("login")
  ws.on('message', onMessageHandler);
  ws.on("close", () => console.log("log out"))
});
