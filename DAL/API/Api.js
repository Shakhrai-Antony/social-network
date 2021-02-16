import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cac21dd0-3e47-4eb9-bc21-94de57067bc0'
    }
})


export const UsersAPI = {

    getUsers(currentPage = 1, usersOnPage = 10) {
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    authUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data
            })
    },
    logInUser(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logOutUser() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },
    uploadUserPhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data
        })
    }

}