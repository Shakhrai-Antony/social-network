const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

const initialState = {
    dialogsData: [
        {id: 1, name: 'Anton'}, {id: 2, name: 'Dasha'}, {id: 3, name: 'Masha'}
    ],
    messageData: [
        {id: 1, message: 'Hi there'}, {id: 2, message: "What's up"}, {id: 3, message: "Don't be sad"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.newMessage
            }

        case ADD_MESSAGE:
            let newMessageText = state.newMessageText
            return {
                ...state,
                messageData: [...state.messageData, {id: 4, message: newMessageText}],
                newMessageText: ''
            }
        default:
            return state;
    }
}


export const addMessageActionCreator = (message) => {
    return {type: ADD_MESSAGE, newMessage: message}
}

export const updateNewMessageActionCreator = (message) => {
    return {type: UPDATE_NEW_MESSAGE, newMessage: message}
}

export default dialogsReducer