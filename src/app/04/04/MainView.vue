<script setup lang="ts">
import { ref } from 'vue'

const isRole = ref<number>(0)
const isModalOpen = ref<boolean>(false)
</script>

<template>
  <div class="p-6 border border-gray-400 block bg-white rounded-2xl w-full shadow-xs">
    <div class="flex justify-between gap-5">
      <div class="w-30">
        <img class="size-25 m-auto" src="/vue_logo.png" alt="" />
      </div>
      <div class="flex-1 flex flex-col gap-2.5">
        <div>名稱：Vue</div>
        <div>
          <span>權限：</span>
          <span class="text-blue-500" v-if="isRole === 0">來賓</span>
          <span class="text-green-500" v-else-if="isRole === 1">會員</span>
          <span class="text-gray-500" v-else-if="isRole === 2">管理者</span>
          <span class="text-red-500" v-else>未設定</span>
        </div>
        <div>
          <a class="mt-4 text-sm text-blue-400 underline" @click="isModalOpen = true">
            查看詳細權限說明
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-5">
      <button v-if="isRole !== 0" @click="() => (isRole = 0)">來賓</button>
      <button v-if="isRole !== 1" @click="() => (isRole = 1)">會員</button>
      <button v-if="isRole !== 2" @click="() => (isRole = 2)">管理者</button>
      <button v-if="isRole !== 9999" @click="() => (isRole = 9999)">未設定</button>
    </div>
  </div>
  <div
    v-show="isModalOpen"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-1001"
  >
    <div class="bg-white p-8 rounded-xl max-w-sm">
      <h2 class="font-bold mb-4">權限等級說明</h2>
      <ul class="text-sm space-y-2">
        <li>0：來賓 - 僅限觀看</li>
        <li>1：會員 - 可發表評論</li>
        <li>2：管理者 - 擁有最高權限</li>
      </ul>
      <button @click="isModalOpen = false" class="mt-6 bg-gray-200 px-4 py-2 rounded">關閉</button>
    </div>
  </div>
  <div v-show="isModalOpen" class="bg-black/70 fixed inset-0 z-1000"></div>
</template>
