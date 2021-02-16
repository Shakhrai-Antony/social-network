import {UsersAPI as usersAPI} from "../DAL/API/Api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO = 'SET_PHOTO'

const initialState = {
    postData: [
        {id: 1, message: 'Hey, is anyone here?', likesCount: 2},
        {id: 2, message: 'Talk with me please', likesCount: 4}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPostText = state.newPostText
            return {
                ...state,
                postData: [...state.postData, {id: 3, message: newPostText, likesCount: 0}],
                newPostText: ''
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const addNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}

export const setUserProfile = (userProfile) => {
    return {
        type: SET_PROFILE, userProfile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const setUserPhoto = (photos) => {
    return {
        type: SET_PHOTO, photos
    }
}

export const usersProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const userStatusThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getUserStatus(userId)
            .then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const userUpdateStatusThunk = (status) => {
    return (dispatch) => {
        usersAPI.updateUserStatus(status)
            .then(data => {
                if(data.resultCode === 0){
                dispatch(setUserStatus(status))
            }
            })
    }
}

export const savePhotoThunk = (file) => {
    return (dispatch) => {
        usersAPI.uploadUserPhoto(file)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(setUserPhoto(data.photos))
                }
            })
    }
}

export default profileReducer