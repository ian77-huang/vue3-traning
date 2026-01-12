<script setup lang="ts">
import type { ListItemProps } from '../types'

import { ref, reactive, nextTick } from 'vue'

import '../styles.css'

import ListItem from '../components/ListItem.vue'

const list = reactive<ListItemProps[]>([
  { id: 1, text: '物品 1', total: 0 },
  { id: 2, text: '物品 2', total: 0 },
])
const refListItems = ref<HTMLDivElement | null>(null)

const findIndexList = (id: number) => list.findIndex((v) => v.id === id)
const updateList = (id: number, total: number) => {
  const index = findIndexList(id)
  if (index !== -1 && list[index]) {
    list[index].total = total
  }
}
const addItem = (id: number) => {
  const index = findIndexList(id)
  if (index !== -1 && list[index]) {
    updateList(id, list[index].total + 1)
  }
}
const resetItem = (id: number) => {
  updateList(id, 0)
}
const resetItemAll = () => {
  console.log(list)
  list.map((v) => resetItem(v.id))
}
const pushItem = async () => {
  if (refListItems.value && list.length === 2) {
    list.push({ id: 3, text: '物品 3', total: 0 })
    console.log(`物品區塊的高度 -> nextTick前：${refListItems.value.offsetHeight}`)
    await nextTick()
    console.log(`物品區塊的高度 -> nextTick後：${refListItems.value.offsetHeight}`)
  }
}
</script>

<template>
  <div class="container">
    <h2>Vue 3 - nextTick 範例</h2>
    <p class="info">下方每個卡片都是一個獨立的子元件。當卡片閃爍時，表示該元件執行了更新。</p>
    <div class="controls">
      <div><button class="primary" @click="addItem(1)">增加物品數 1</button></div>
      <div><button class="primary" @click="addItem(2)">增加物品數 2</button></div>
      <div v-if="list.length >= 3">
        <button class="primary" @click="addItem(3)">增加物品數 3</button>
      </div>
      <div v-if="list.length === 2">
        <button class="primary" @click="pushItem()">加入物品 3</button>
      </div>
      <div><button class="primary" @click="resetItemAll">全部重置</button></div>
    </div>
    <div ref="refListItems">
      <ListItem
        v-for="item in list"
        :key="item.id"
        :id="item.id"
        :text="item.text"
        :total="item.total"
      ></ListItem>
    </div>
  </div>
</template>
