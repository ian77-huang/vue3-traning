<script setup lang="ts">
import { ref, onMounted } from 'vue'

import './root.css'

// 定義側邊欄的開關狀態
const isSidebarOpen = ref(false)

// 切換選單的方法
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 關閉選單的方法（點擊遮罩或連結時使用）
const closeSidebar = () => {
  isSidebarOpen.value = false
}

// 模擬 Page List 資料
const pages = ref<{ id: number; title: string; active: boolean; url: string }[]>([
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
    id: 5,
    title: '04-02. Template Syntax - v-html',
    active: false,
    url: '/04/02',
  },
])

onMounted(() => {
  const url = new URL(window.location.href)
  const page = pages.value.find((v) => v.url === url.pathname)
  if (page) {
    page.active = true
  }
})
</script>
<template>
  <div class="app-layout">
    <nav class="navbar">
      <div class="nav-left">
        <div class="menu-icon" @click="toggleSidebar">☰</div>
        <a href="#" class="logo">Vue<span>Master</span></a>
      </div>
      <div class="nav-right">
        <a href="https://www.youtube.com/@rbbr5047/">訂閱頻道</a>
      </div>
    </nav>

    <aside class="sidebar" :class="{ show: isSidebarOpen }">
      <div class="sidebar-header">課程章節</div>
      <ul class="page-list">
        <li v-for="page in pages" :key="page.id" :class="{ active: page.active }">
          <a :href="page.url" active-class="active">
            {{ page.title }}
          </a>
        </li>
      </ul>
    </aside>

    <div class="overlay" :class="{ show: isSidebarOpen }" @click="closeSidebar"></div>

    <main class="main-content">
      <section class="content-card">
        <h1>{{ pages.find((p) => p.active)?.title }}</h1>
        <div style="height: 1000px"><router-view /></div>
      </section>
    </main>
  </div>
</template>
