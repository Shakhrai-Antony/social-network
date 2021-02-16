

/*
my own store

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hey, is anyone here?', likesCount: 2},
                {id: 2, message: 'Talk with me please', likesCount: 4}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Anton'}, {id: 2, name: 'Dasha'}, {id: 3, name: 'Masha'}
            ],
            messageData: [
                {id: 1, message: 'Hi there'}, {id: 2, message: "What's up"}, {id: 3, message: "Don't be sad"}
            ],
            newMessageText: ''
        }

    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
}

export default store

 */