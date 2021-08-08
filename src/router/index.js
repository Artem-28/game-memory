import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Game',
    meta: { layout: 'main' },
    component: () => import('../views/GamePage')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    meta: { layout: 'main' },
    component: () => import('../views/StatisticsPage')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: { layout: 'auth' },
    component: () => import('../views/AuthPage')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
