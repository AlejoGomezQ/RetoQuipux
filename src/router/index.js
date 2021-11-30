import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Empresas from '@/views/Empresas'
import Articulos from '@/views/Articulos'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/empresas',
    name: 'Empresas',
    component: Empresas
  },
  {
    path: '/articulos',
    name: 'Articulos',
    component: Articulos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
