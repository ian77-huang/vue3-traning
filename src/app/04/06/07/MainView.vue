<script setup lang="ts">
import { ref } from 'vue'

import { Page, Callout, Section } from '@/app/components'

const message = ref<string>('')
const log = ref<string>('請嘗試操作下方的輸入框或按鈕...')

const handleAction = (type: string) => {
  log.value = `觸發事件：${type}`
  if (type === 'Clear') message.value = ''
}
</script>

<template>
  <Page title="⌨️ 鍵盤與系統鍵">
    <Callout
      class="fixed bottom-0 left-0 w-full z-50 m-0 rounded-none md:left-65 md:w-[calc(100%-260px)]"
    >
      <p>
        系統反饋：<span class="text-brand font-bold">{{ log }}</span>
      </p>
    </Callout>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Section title="常用按鍵測試 (請輸入文字後按鍵)">
        <input
          class="input-default"
          v-model="message"
          placeholder="Enter 送出 / Esc 清空 / Delete 刪除"
          @keyup.enter="handleAction(`Enter (送出表單)`)"
          @keyup.esc="handleAction(`Esc (取消編輯)`)"
          @keyup.delete="handleAction(`Delete/Backspace (刪除動作)`)"
          @keydown.tab.prevent="handleAction('Tab (已攔截預設切換)')"
          @keyup.space="handleAction(`Space (空白鍵)`)"
        />
      </Section>
      <Section color="blue" title="方向鍵控制">
        <div
          class="flex items-center justify-center h-24 bg-white border-2 border-dashed rounded-base text-2xl"
          tabindex="0"
          @keydown.up="handleAction(`↑ 向上`)"
          @keydown.down="handleAction(`↓ 向下`)"
          @keydown.left="handleAction(`← 向左`)"
          @keydown.right="handleAction(`→ 向右`)"
        >
          <p class="text-blue-500 mt-2 text-center">點擊方塊後按方向鍵</p>
        </div>
      </Section>
      <Section color="purple" title="系統組合鍵 (.exact)">
        <button class="btn-secondary w-full" @click="handleAction(`普通點擊`)">普通點擊</button>
        <button class="btn-secondary w-full" @click.ctrl="handleAction(`Ctrl + Click)`)">
          Ctrl + 點擊 (按著 Shift 也行)
        </button>
        <button
          class="btn-secondary w-full"
          @click.ctrl.exact="handleAction(`【精準】只有 Ctrl + Click`)"
        >
          精準 Ctrl + 點擊 (多按不行)
        </button>
        <button
          class="btn-default w-full"
          @click.meta.exact="handleAction(`【精準】只有 Command + Click`)"
        >
          精準 Command + 點擊
        </button>
        <button
          class="btn-default w-full"
          @click.alt.exact="handleAction(`【精準】只有 Option + Click`)"
        >
          精準 Option + 點擊
        </button>
      </Section>
    </div>
  </Page>
</template>
