import {fakeDataBase} from "../../../fake-data-base"

export function onFakeAuthHandler(payload) {
    const {webSocket, type} = this;
    const {name} = payload;
    const newUserId = fakeDataBase.addNewUser({name, webSocket});
    console.log(
        fakeDataBase.users.map(us => `${us.id} + ${us.name}`)
    )
    const data = JSON.stringify({
        type,
        payload: {id: newUserId}
    })
    webSocket.send(data)
}