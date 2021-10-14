import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    //meta: {layout : 'Empty'},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category/:alias',
    name: 'Categry',
    component: Category
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout : 'Empty'},
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout : 'Empty'},
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
