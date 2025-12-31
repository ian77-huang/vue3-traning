<script setup lang="ts">
import type { ListItemProps } from '../types'

import { ref } from 'vue'

import '../styles.css'

import ListItem from '../components/ListItem.vue'

const list = ref<ListItemProps[]>([
  { id: 1, text: '物品 1', total: 0 },
  { id: 2, text: '物品 2', total: 0 },
])

const findIndexList = (id: number) => list.value.findIndex((v) => v.id === id)
const updateList = (id: number, total: number) => {
  const index = findIndexList(id)
  if (index !== -1 && list.value[index]) {
    list.value[index].total = total
  }
}
const addItem = (id: number) => {
  const index = findIndexList(id)
  if (index !== -1 && list.value[index]) {
    updateList(id, list.value[index].total + 1)
  }
}
const resetItem = (id: number) => {
  updateList(id, 0)
}
const resetItemAll = () => {
  resetItem(1)
  resetItem(2)
}
</script>

<template>
  <div class="container">
    <h2>Vue 3 - ref - 深層響應</h2>
    <p class="info">下方每個卡片都是一個獨立的子元件。當卡片閃爍時，表示該元件執行了更新。</p>
    <div class="controls">
      <div><button @click="addItem(1)">增加物品數 1</button></div>
      <div><button @click="addItem(2)">增加物品數 2</button></div>
      <div><button @click="resetItemAll">全部重置</button></div>
    </div>
    <ListItem
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :text="item.text"
      :total="item.total"
    ></ListItem>
  </div>
</template>
