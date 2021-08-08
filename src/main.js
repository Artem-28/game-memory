import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate/src";
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyCJIQqB_n4w0dJ1IquovVXueYYpogJIeqU",
  authDomain: "game-memory-6e00b.firebaseapp.com",
  databaseURL: "https://game-memory-6e00b-default-rtdb.firebaseio.com",
  projectId: "game-memory-6e00b",
  storageBucket: "game-memory-6e00b.appspot.com",
  messagingSenderId: "190952389168",
  appId: "1:190952389168:web:6192db990fbf82f4e0cbf5"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
