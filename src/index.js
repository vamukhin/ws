var WebSocketServer = new require('ws');
import {onMessageHandler} from "./events/on-message"


let webSocketServer = new WebSocketServer.Server({
  port: 8081
});

console.log("start listening");

webSocketServer.on('connection', function(ws) {
  ws.on('message', onMessageHandler);
});
