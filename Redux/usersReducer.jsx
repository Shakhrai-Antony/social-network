import {UsersAPI as usersAPI, UsersAPI} from "../DAL/API/Api";
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USER = 'SET-USER'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const IS_FETCHING = 'IS_FETCHING'
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    totalUsersCount: 0,
    usersOnPage: 10,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.usersId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.usersId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
        case SET_USER:
            return {
                ...state,
                ...state.users,
                users: [...action.newUsers]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.loading
            }
        case FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFollowing
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


export const follow = (usersId) => {
    return {
        type: FOLLOW_USER, usersId
    }
}

export const unfollow = (usersId) => {
    return {
        type: UNFOLLOW_USER, usersId
    }
}

export const setUsers = (newUsers) => {
    return {
        type: SET_USER, newUsers
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_USERS_TOTAL_COUNT, totalCount
    }
}

export const setCurrentPage = (newCurrentPage) => {
    return {
        type: SET_CURRENT_PAGE, newCurrentPage
    }
}

export const isFetching = (loading) => {
    return {
        type: IS_FETCHING, loading
    }
}

export const isFollowingInProgress = (isFollowing, userId) => {
    return {
        type: FOLLOWING_PROGRESS, isFollowing, userId
    }
}

export const getUsersThunk = (currentPage, usersOnPage ) => {
    return (dispatch) => {
        dispatch(isFetching(true))
        dispatch(setCurrentPage(currentPage))
        UsersAPI.getUsers(currentPage, usersOnPage)
            .then(data => {
                dispatch(isFetching(false))
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followUsersThunk = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingInProgress(true, userId))
        usersAPI.unfollowUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(isFollowingInProgress(false, userId))
            })
    }
}

export const unfollowUsersThunk = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingInProgress(true, userId))
        usersAPI.followUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(isFollowingInProgress(false, userId))
            })
    }
}

export default usersReducer