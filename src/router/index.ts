import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import AppView from '../App.vue'

import MainView31 from '../app/03/1/MainView.vue'
import MainView32 from '../app/03/2/MainView.vue'
import MainView33 from '../app/03/3/MainView.vue'

import MainView41 from '../app/04/01/MainView.vue'
import MainView42 from '../app/04/02/MainView.vue'
import MainView43 from '../app/04/03/MainView.vue'
import MainView44 from '../app/04/04/MainView.vue'
import MainView45 from '../app/04/05/MainView.vue'

import MainView461 from '../app/04/06/01/MainView.vue'
import MainView462 from '../app/04/06/02/MainView.vue'
import MainView463 from '../app/04/06/03/MainView.vue'
import MainView464 from '../app/04/06/04/MainView.vue'
import MainView465 from '../app/04/06/05/MainView.vue'
import MainView466 from '../app/04/06/06/MainView.vue'
import MainView467 from '../app/04/06/07/MainView.vue'
import MainView468 from '../app/04/06/08/MainView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/03/1', component: MainView31 },
  { path: '/03/2', component: MainView32 },
  { path: '/03/3', component: MainView33 },
  { path: '/04/01', component: MainView41 },
  { path: '/04/02', component: MainView42 },
  { path: '/04/03', component: MainView43 },
  { path: '/04/04', component: MainView44 },
  { path: '/04/05', component: MainView45 },
  { path: '/04/06/01', component: MainView461 },
  { path: '/04/06/02', component: MainView462 },
  { path: '/04/06/03', component: MainView463 },
  { path: '/04/06/04', component: MainView464 },
  { path: '/04/06/05', component: MainView465 },
  { path: '/04/06/06', component: MainView466 },
  { path: '/04/06/07', component: MainView467 },
  { path: '/04/06/08', component: MainView468 },
  { path: '/', component: AppView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
