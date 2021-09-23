import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calendar from '../views/profile/Calendar.vue'
import Chesscv from '../views/profile/Chesscv.vue'
import ChessDiary from '../views/profile/ChessDiary.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  },
  {
    path: '/thnks',
    name: 'Thnks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Thnks.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
    children:[
      
      {
      path: '',
      name: 'Calendar',
      component: Calendar
      },
    
     {
        path: 'chesscv',
        name: 'Chesscv',
        component: Chesscv
        },
      {
          path: 'chessdiary',
          name: 'ChessDiary',
          component: ChessDiary
       }

    ]
  },
  {
    path: '/intsearch',
    name: 'Intsearch',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Intsearch.vue')
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
