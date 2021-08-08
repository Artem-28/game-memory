import firebase from "firebase/app";

export default {
    namespaced: true,
    state: {
        currentUser: null,
        users: {}
    },
    mutations: {
        setUsers: (state, payload) => {
            const users = Object.keys(payload).map(key => {
                const user = payload[key]
                user.id = key
                return user
            }).sort((userA, userB) => userB.points - userA.points)
            state.users = users
        },
        updateUserPoints: (state, payload) => {
            state.currentUser.points = payload
        },
        updateCurrentUser: (state, payload) => {
            state.currentUser = payload
        }
    },
    actions: {
       getUsers: async ({commit}) => {
            try {
                const data = await firebase.database().ref().child('users').get()
                const users = data.val()
                commit('setUsers', users)
            } catch (error) {
                console.log(error)
            }
       },
        getUserByUid: async ({commit}, uid) => {
           try {
               const data = await firebase.database().ref(`/users/${uid}`).get()
               const user = data.val()
               commit('updateCurrentUser', user)
           } catch (error) {
               console.log(error)
           }
        },
        updateUser: async ({state, commit}, {uid, points}) => {
           console.log(uid)
           const totalPoints = +state.currentUser.points + points
            try {
                await firebase.database().ref(`/users/${uid}/points`).set(totalPoints)
                commit('updateUserPoints', totalPoints)
            } catch (error) {
               console.log(error)
            }
        }
    }
}
