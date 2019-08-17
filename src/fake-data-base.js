import uuidv4 from 'uuid/v4';

class FakeDataBase {
    constructor(){
        this.messages = [];
        this.users = [];
    }

    addId(obj){
        return {
            ...obj,
            id: uuidv4()
        }
    }

    addNewMessage(message){
        const messageWithId = this.addId(message);
        this.messages.push(messageWithId);
        return messageWithId;
    }

    addNewUser(user){
        const userWithId = this.addId(user);
        this.users.push(userWithId);
        return userWithId.id;
    }

}

export const fakeDataBase = new FakeDataBase();