import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import NombreEmpresa from '@/layouts/NombreEmpresa'
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
    path: '/nombre-empresa',
    name: 'Nombre Empresa',
    meta: { value: 'Nombre Empresa' },
    component: NombreEmpresa,
    children: [
      {
        path: 'empresas',
        name: 'Empresas',
        meta: { value: 'Empresa' },
        component: Empresas
      },
      {
        path: 'articulos',
        name: 'Articulos',
        meta: { value: 'Articulos' },
        component: Articulos
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
