import React from 'react'
import {connect} from "react-redux";
import Messages from "./Messages";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profileReducer";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostContainer: () => {
            dispatch(addPostActionCreator())
        },
        addNewPostTextContainer: (text) => {
            dispatch(addNewPostTextActionCreator(text))
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer