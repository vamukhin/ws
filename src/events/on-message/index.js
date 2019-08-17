import {MESSAGE_HANDLE_TYPES} from "./on-message-handle-types"
import {onFakeAuthHandler} from "./handlers/on-fake-auth"
import {onNewChatMessage} from "./handlers/on-new-message"

const actionHandlerConfig = {
    [MESSAGE_HANDLE_TYPES.auth]: onFakeAuthHandler,
    [MESSAGE_HANDLE_TYPES.chatMessage]: onNewChatMessage,
}

export function onMessageHandler(message){
    const webSocket = this;
    console.log(message)
    
    const {type, payload} = JSON.parse(message);
    const handler =  actionHandlerConfig[type];
    if(handler) {
        console.log("handle found")
        const thisForHandler = {
            type, webSocket
        }
        handler.call(thisForHandler, payload)
    } else {
        console.log("handle error")
        const errorObject = JSON.stringify({
            type: MESSAGE_HANDLE_TYPES.error,
            payload: {
                message: `no handler ${type} is registered`
            }
        })

        webSocket.send(errorObject)
    }
}