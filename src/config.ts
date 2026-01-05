import type { NavPages } from './types'

export const dataNavPages: NavPages = [
  // { id: 1, title: '01. Vue 3 簡介', active: false },
  { id: 2, title: '03-01. Ref 深層響應範例', active: false, url: '/03/1' },
  { id: 3, title: '03-02. Reactive 範例', active: false, url: '/03/2' },
  { id: 4, title: '03-03. nextTick 範例', active: false, url: '/03/3' },
  {
    id: 5,
    title: '04-01. Template Syntax - 傳統 JavaScript 和 Mustache 語法不同',
    active: false,
    url: '/04/01',
  },
  {
    id: 6,
    title: '04-02. Template Syntax - v-html',
    active: false,
    url: '/04/02',
  },
  {
    id: 7,
    title: '04-02. Template Syntax - v-bind',
    active: false,
    url: '/04/03',
  },
]
