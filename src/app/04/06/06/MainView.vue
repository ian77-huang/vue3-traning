<script setup lang="ts">
import { ref } from 'vue'

import { Page, Card, Callout } from '@/app/components'

const logs = ref<string[]>([])
const addLog = (msg: string) => {
  const date = new Date()
  logs.value.unshift(`${date.toLocaleTimeString()}:${date.getMilliseconds()} ${msg}`)
}
</script>
<template>
  <Callout class="h-35 overflow-y-auto fixed bottom-0 left-0 w-full z-50 m-0 rounded-none">
    <div class="flex justify-between border-b mb-2 pb-1">
      <span class="font-bold"> 事件紀錄 (最新在最上) </span>
      <button @click="logs = []" class="text-brand underline">清空</button>
    </div>
    <p v-for="log in logs" :key="log" class="font-mono text-body">{{ log }}</p>
  </Callout>
  <Page class="h-500" title="Vue 事件修飾符">
    <div class="grid gird-cols-1 md:grid-cols-2 gap-6">
      <Card title=".stop 停止冒泡">
        <div @click="addLog('外層容器被點擊')">
          <button @click.stop="addLog('按鈕被點擊 (冒泡已停止)')" class="btn-default w-full">
            點我 (不會觸發外層)
          </button>
        </div>
      </Card>
      <Card title=".prevent 阻止預設">
        <a
          class="text-brand underline block text-center py-2"
          href="https://google.com"
          @click.prevent="addLog('連結被點擊，但沒有跳轉')"
          >點我去 Google (會被攔截)
        </a>
      </Card>
      <Card title=".self 只處理目標本身">
        <div class="bg-orange-300 p-5" @click.self="addLog('只有點到橘色區域才觸發')">
          <button class="btn-secondary w-full" @click="addLog('點按鈕不會觸發橘色外層')">
            點按鈕測試
          </button>
        </div>
      </Card>
      <Card title=".once 僅限一次">
        <button
          @click.once="addLog('這按鈕這輩子只能點一次')"
          class="btn-default w-full bg-purple-600 hover:bg-purple-700"
        >
          僅限一次
        </button>
      </Card>
      <Card title=".capture 捕獲優先">
        <div
          @click.capture="addLog('【捕獲】我是外層，我先執行')"
          class="p-4 border rounded-base bg-blue-50"
        >
          <button
            @click.stop="addLog('【冒泡】我是內層按鈕')"
            class="btn-default w-full bg-blue-600"
          >
            觀察執行順序
          </button>
        </div>
      </Card>
      <Card title=".passive 順暢滾動">
        <div
          @scroll.passive="addLog('正在滾動...')"
          class="h-20 overflow-y-scroll bg-white border p-2 text-[10px]"
        >
          滾動我！.passive 告訴瀏覽器我不會阻止你的預設滾動，讓畫面更順暢。<br /><br />
          (通常用於移動端觸控事件優化)
          <p v-for="i in 10" :key="i">第 {{ i }} 段測試文字：向下捲動來觸發事件...</p>
        </div>
      </Card>
    </div>
  </Page>
</template>
