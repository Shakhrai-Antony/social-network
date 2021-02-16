import {UsersAPI as usersAPI} from "../DAL/API/Api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserAuthData = (email, id, login, isAuth) => {
    return {type: SET_USER_AUTH_DATA, data: {email, id, login, isAuth}}
}

export const setUsersThunk = () => {
    return (dispatch) => {
        return usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {email, id, login} = data.data
                    dispatch(setUserAuthData(email, id, login, true))
                }
            })
    }
}

export const logInThunk = (email,password, rememberMe) => {
    return (dispatch) => {
        usersAPI.logInUser(email,password, rememberMe)
            .then(data => {
                if (data.resultCode === 0){
                   dispatch(setUsersThunk())
                }
            })
    }
}


export const logOutThunk = () => {
    return (dispatch) => {
        usersAPI.logOutUser()
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setUserAuthData(null, null, null, false))
                }
            })
    }
}

export default authReducer