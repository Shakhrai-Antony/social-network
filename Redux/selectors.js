export const getUsers = (state) => {
    return state.usersPage.users
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getUsersOnPage = (state) => {
    return state.usersPage.usersOnPage
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const isFetchingProgress = (state) => {
    return state.usersPage.isFetching
}

export const isFollowingRequest = (state) => {
    return state.usersPage.isFollowingProgress
}