<script setup lang="ts">
import type { User } from './types'

// 輸入的參數資料
defineProps<{ users: User[] }>()
// 呼叫父元件事件
const emit = defineEmits<{ deleteUser: [id: number] }>()
</script>
<template>
  <div
    v-for="{ id, name, role, email, avatar, status } in users"
    :key="id"
    class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group"
  >
    <div class="p-6">
      <!-- 使用者資訊 -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <img
            :src="avatar"
            :alt="name"
            class="w-16 h-16 rounded-full bg-gray-100 border-2 border-indigo-50"
          />
          <span
            v-if="status === 'online'"
            class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"
          ></span>
        </div>

        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {{ name }}
          </h3>
          <p class="text-sm text-indigo-500 font-medium">{{ role }}</p>
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-50 text-sm text-gray-500">
        <div class="flex items-center space-x-2">
          <span class="truncate">📧 {{ email }}</span>
        </div>
      </div>

      <!-- 互動事件 -->
      <div class="mt-6 space-x-2 flex flex-row-reverse">
        <button
          @click="() => emit('deleteUser', id)"
          class="px-3 py-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
        >
          刪除
        </button>
      </div>
    </div>
  </div>
</template>
