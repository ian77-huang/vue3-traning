<script setup lang="ts">
import type { NavPages } from './types'

import { ref, onMounted } from 'vue'

import { dataNavPages } from './config'

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
const pages = ref<NavPages>(dataNavPages)

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
      <section class="content-card mt-5">
        <h1>{{ pages.find((p) => p.active)?.title }}</h1>
        <div style="height: 1000px"><router-view /></div>
      </section>
    </main>
  </div>
</template>
