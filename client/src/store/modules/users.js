import Vue from 'vue'
import { fetchUsersAPI, fetchDepartamentsAPI, createUserAPI, deleteUserAPI, editUserAPI } from '@/controls'

const users = {
    namespaced: true,
    state: {
        users: [],
        departaments: []
    },
    mutations: {
        setUsers: (state, items) => Vue.set(state, 'users', items),
        setDepartaments: (state, items) => Vue.set(state, 'departaments', [...items])
    },
    getters: {},
    actions: {
        downloadUsers: ({ commit }) => fetchUsersAPI().then(res => {
            commit('setUsers', res.data.users)
        }),
        downloadDepartaments: ({ commit }) => fetchDepartamentsAPI().then(res => {
            commit('setDepartaments', res.data.departaments)
        }),
        createUser: ({ dispatch }, user) => createUserAPI(user).then(res => {
            if (res.status === 200) dispatch('downloadUsers')
            return res
        }),
        deleteUser: ({ dispatch }, user) => deleteUserAPI(user).then(res => {
            if (res.status === 200) dispatch('downloadUsers')
            return res
        }),
        editUser: ({ dispatch }, user) => editUserAPI(user).then(res => {
            if (res.status === 200) dispatch('downloadUsers')
            return res
        }),
    }
}

export default users;