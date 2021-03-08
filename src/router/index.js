import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Home',
    component: Home
  },
  {
    path: '/books/:bookId',
    name: 'Detail',
    component: Detail
  },
  {
    path: '*',
    redirect: '/books',
  }
]

const router = new VueRouter({
  routes
})

export default router
