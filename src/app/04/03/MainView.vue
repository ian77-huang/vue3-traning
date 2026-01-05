<script setup lang="ts">
import { ref } from 'vue'

const id = ref<string>('my_logo')
const imageUrl = ref<string>('/vue_logo.png')
const isLocked = ref<boolean>(false)
const inputAttrs = { id: 'my_input', type: 'text', value: '我是vue 3' }
</script>
<template>
  <div>
    <div>v-bind</div>
    <img class="size-25" v-bind:src="imageUrl" v-bind:id />
    <div>v-bind 標籤</div>
    <img class="size-25" :src="imageUrl" :id />
    <button :disabled="isLocked" @click="() => console.log(`按鈕沒有被禁用成功`)">
      被禁用的按鈕
    </button>
    <div class="mt-5">綁定多屬性的物件</div>
    <input
      class="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      v-bind="inputAttrs"
    />
  </div>
</template>
