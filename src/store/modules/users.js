import firebase from "firebase/app";

export default {
    namespaced: true,
    state: {
        users: {}
    },
    getters: {
       /* users: state => {
            return Object.keys(state.users).map(key => state.users[key]).sort(user => user.points)
        }*/
    },
    mutations: {
        setUsers: (state, payload) => {
            const users = Object.keys(payload).map(key => {
                const user = payload[key]
                user.id = key
                return user
            }).sort((userA, userB) => userB.points - userA.points)
            state.users = users
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
        }
    }
}
