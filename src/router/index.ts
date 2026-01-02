import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import AppView from '../App.vue'

import MainView31 from '../app/03/1/MainView.vue'
import MainView32 from '../app/03/2/MainView.vue'
import MainView33 from '../app/03/3/MainView.vue'

import MainView41 from '../app/04/01/MainView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/03/1', component: MainView31 },
  { path: '/03/2', component: MainView32 },
  { path: '/03/3', component: MainView33 },
  { path: '/04/01', component: MainView41 },
  { path: '/', component: AppView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
