import firebase from "firebase/app";
import router from "../../router";

export default {
    namespaced: true,
    state: {
        currentUser: null
    },
    mutations: {
        updateCurrentUser: (state, payload) => {
            state.currentUser = payload
        },
        logout: state => state.currentUser = null
    },
    actions: {
        async login({commit, dispatch}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
                await dispatch('getCurrentUser')
                router.push('/');
            } catch (error) {
                console.log(error)
            }
        },
        async register({commit, dispatch}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const user = await dispatch("getCurrentUser");
                const result = await firebase.database().ref(`/users/${user.uid}`).set({
                    email,
                    name,
                    points: 1254
                })
            } catch (error) {
                console.log(error)
            }
        },
        async getCurrentUser({commit}){
            const user = await firebase.auth().currentUser
            commit('updateCurrentUser', user);
            return user && user
        },

    }
}
