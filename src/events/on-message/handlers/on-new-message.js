import {fakeDataBase} from "../../../fake-data-base"

export function onNewChatMessage(payload){    
    const {webSocket, type} = this;
    const {messageText, userId, userName} = payload;
    const message = {
        messageText, userId, userName
    }
    const newMessageWithId = fakeDataBase.addNewMessage(message);
    const lastMessageJson = JSON.stringify({
        type,
        payload: newMessageWithId
    })
    fakeDataBase.users.forEach(loggedUser => loggedUser.webSocket.send(lastMessageJson))

}