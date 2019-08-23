import uuidv4 from 'uuid/v4';
const WebSocket = require('ws');

export function onNewChatMessage(payload){    
    const {webSocket, type} = this;
    const {messageText, userName} = payload;

    const message = {
        messageText, 
        userName,
        messageId: uuidv4()
    }
    const lastMessageJson = JSON.stringify({
        type,
        payload: message
    })
    clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(lastMessageJson);
          }
      });
}