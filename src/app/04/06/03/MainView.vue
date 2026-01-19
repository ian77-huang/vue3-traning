<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const add = (value: number) => {
  count.value += value
}
</script>

<template>
  <div>Count is：{{ count }}</div>
  <div class="flex gap-2">
    <button class="btn-default" @click="add(1)">Add</button>
  </div>
</template>
