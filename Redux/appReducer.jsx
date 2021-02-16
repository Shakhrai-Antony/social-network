import {setUsersThunk} from "./authReducer";

const SET_APP_INITIALIZED = 'SET_APP_INITIALIZED'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_APP_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializingApp = () => {
    return {type: SET_APP_INITIALIZED}
}

export const initializedAppThunk = () => (dispatch) => {
    let promise = dispatch(setUsersThunk())
    promise.then(() => {
        dispatch(initializingApp())
    })
}

export default appReducer