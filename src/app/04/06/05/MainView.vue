<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('')
const status = ref<string>('等待操作...')
const lastKey = ref<string>('')
const submitCount = ref<number>(0)

// 事件處理函數
const onInput = (e: InputEvent) => {
  const target = e.target as HTMLInputElement
  status.value = `正在輸入：${target.value}`
  name.value = `${target.value}`
}
const onChange = () => {
  status.value = `內容已確認（失去焦點）`
}
const onKeydown = (e: KeyboardEvent) => {
  lastKey.value = `按下：${e.key}`
}
const onKeyup = () => {
  status.value = `按鍵已放開`
}
const onMouseOver = () => {
  status.value = `滑鼠進來了！`
}
const onClickClear = () => {
  name.value = ''
  status.value = '資料已清空'
}
const onSubmit = () => {
  submitCount.value++
  alert(`表單已送出！目前資料：${name.value}`)
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto space-x-6">
    <div class="callout-default">
      <p class="text-sm">
        <span class="text-brand font-bold"> 狀態：{{ status }} </span>
      </p>
      <p class="text-xs text-gray-500">偵測按鈕：{{ lastKey }}</p>
    </div>
    <form class="space-y-4" @submit.prevent="onSubmit">
      <div class="mt-5">
        <label class="label-default"> 體驗輸入事： </label>
        <input
          type="text"
          class="input-default"
          placeholder="護輸入文字..."
          @input="onInput"
          @change="onChange"
          @keydown="onKeydown"
          @keyup="onKeyup"
        />
        <p class="text-[10px] mt-1 text-gray-400">
          測試：@input (打字即觸發) / @change (離開輸入框才觸發) / @keydown & @keyup
        </p>
      </div>
      <div class="flex gap-2">
        <button type="button" class="btn-secondary" @click="onClickClear" @mouseover="onMouseOver">
          @mouseover & @click (清空)
        </button>
        <button type="submit" class="btn-default">@submit (送出)</button>
      </div>
    </form>
    <div class="mt-5 text-center text-gray-400 text-xs">表單送出次數：{{ submitCount }}</div>
  </div>
</template>
