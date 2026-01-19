<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
</script>

<template>
  <div>Count is：{{ count }}</div>
  <div class="flex gap-2">
    <button class="btn-default" @click="count++">Add</button>
  </div>
</template>
