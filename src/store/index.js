import Vue from 'vue'
import Vuex from 'vuex'
import Game from "./modules/game";
import Counter from  "./modules/counter"
import Auth from "./modules/auth"
import Users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Game,
    Counter,
    Auth,
    Users
  }
})
