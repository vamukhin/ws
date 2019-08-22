var WebSocketServer = new require('ws');
import {onMessageHandler} from "./events/on-message"


let webSocketServer = new WebSocketServer.Server({
  port: 8081
});

global.clients = webSocketServer.clients;

console.log("start listening");

webSocketServer.on('connection', function(ws) {
  console.log("login")
  ws.on('message', onMessageHandler);
  ws.on("close", () => console.log("log out"))
});
