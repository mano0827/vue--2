import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import User from '../views/User.vue'
import page2 from '../views/page2.vue'
import page3 from '../views/page3.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:page2 
    // () => import(/* webpackChunkName: "about" */ '../views/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: page3
  },
  // {
  //   path: '/user/:id',
  //   name: 'user',
  //   component: User
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
