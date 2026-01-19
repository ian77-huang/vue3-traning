<script setup lang="ts">
import { ref } from 'vue'

import { Page, Callout } from '@/app/components'

const log = ref<string>('請使用滑鼠或觸控板點擊下方區域')
const activeKey = ref<string>('')

const handleMouse = (type: string) => {
  log.value = `偵測到：${type}`
  activeKey.value = type
  setTimeout(() => (activeKey.value = ''), 500)
}
</script>

<template>
  <Page title="🖱️ 滑鼠與觸控板按鍵偵測">
    <Callout class="text-center py-8">
      <div class="flex justify-center gap-4 mb-4">
        <div
          :class="[
            'w-10 h-16 border-2 rounded-t-xl',
            activeKey === '左鍵' ? 'bg-brand border-brand' : 'border-slate-300',
          ]"
        ></div>
        <div
          :class="[
            'w-6 h-10 border-2 rounded-full mt-2',
            activeKey === '中鍵' ? 'bg-orange-500 border-orange-500' : 'border-slate-300',
          ]"
        ></div>
        <div
          :class="[
            'w-10 h-16 border-2 rounded-t-xl',
            activeKey === '右鍵' ? 'bg-red-500 border-red-500' : 'border-slate-300',
          ]"
        ></div>
      </div>
      <p class="text-sm font-bold text-slate-600">{{ log }}</p>
    </Callout>
    <div class="grid grid-cols-1 gap-2 text-xs text-slate-500">
      <p>💡 <b>左鍵 (.left)</b>：標準點擊 / 觸控板單指點按。</p>
      <p>💡 <b>右鍵 (.right)</b>：通常需配合 .prevent 阻止選單 / 觸控板兩指點按。</p>
      <p>💡 <b>中鍵 (.middle)</b>：滑鼠滾輪點擊 / 觸控板通常不支援 (需特殊手勢)。</p>
    </div>
    <div
      class="h-48 bg-slate-100 border-2 border-dashed border-slate-300 rounded-base flex items-center justify-center cursor-pointer select-none"
      @click.left="handleMouse(`左鍵`)"
      @click.middle="handleMouse(`中鍵`)"
      @contextmenu.prevent.right="handleMouse(`右鍵`)"
    >
      <span class="text-slate-400">在此區域嘗試各種點擊</span>
    </div>
  </Page>
</template>
