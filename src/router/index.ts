import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import AppView from '../App.vue'

import MainView31 from '../app/03/1/MainView.vue'
import MainView32 from '../app/03/2/MainView.vue'
import MainView33 from '../app/03/3/MainView.vue'

import MainView41 from '../app/04/01/MainView.vue'
import MainView42 from '../app/04/02/MainView.vue'
import MainView43 from '../app/04/03/MainView.vue'
import MainView44 from '../app/04/04/MainView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/03/1', component: MainView31 },
  { path: '/03/2', component: MainView32 },
  { path: '/03/3', component: MainView33 },
  { path: '/04/01', component: MainView41 },
  { path: '/04/02', component: MainView42 },
  { path: '/04/03', component: MainView43 },
  { path: '/04/04', component: MainView44 },
  { path: '/', component: AppView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
