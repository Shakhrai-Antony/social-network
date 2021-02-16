import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {

    return {
        dialogsData: state.dialogsPage.dialogsData,
        messageData: state.dialogsPage.messageData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessageContainer: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessageContainer: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage))
        }
    }
}




const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



export default DialogsContainer