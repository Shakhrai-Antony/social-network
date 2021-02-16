import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";





const Dialogs = React.memo( (props) => {

    let dialogs = props.dialogsData.map(dialogs => <Dialog id={dialogs.id} key={dialogs.id} name={dialogs.name}/>);

    let messages = props.messageData.map(message => <Message id={message.id} key={message.id} message={message.message}/>)

    let messageElement = React.createRef();

    let addMessage = () => {
        props.addMessageContainer()
    }


    let updateMessage = () => {
        let newMessage = messageElement.current.value
        props.updateMessageContainer(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
                <textarea onChange={updateMessage} value={props.newMessageText} ref={messageElement} />
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}
)

export default Dialogs