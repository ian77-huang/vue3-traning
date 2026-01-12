<script setup lang="ts">
import type { User } from './types'

import { ref } from 'vue'
import { dataUsers } from './data'
import UserLists from './UserLists.vue'

// 1. 原料清單 (Array) - 模擬從 API 取得的資料
const users = ref<User[]>(dataUsers)

// 刪除功能示範
const removeUser = (id: number) => {
  users.value = users.value.filter((user) => user.id !== id)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-6xl mx-auto">
      <header class="mb-8 flex justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">使用者管理工廠</h1>
          <p class="text-gray-500">目前生產線上有 {{ users.length }} 位成員</p>
        </div>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 使用者介面 -->
        <UserLists :users @delete-user="(id) => removeUser(id)"></UserLists>
      </div>

      <div v-if="users.length === 0" class="text-center py-20">
        <div class="text-6xl mb-4">🏭</div>
        <h2 class="text-xl text-gray-400 font-medium">工廠目前停工中，請新增成員</h2>
      </div>
    </div>
  </div>
</template>
