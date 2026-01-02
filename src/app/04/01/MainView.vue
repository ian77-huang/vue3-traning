<script setup lang="ts">
import { ref, onMounted } from 'vue'

const count = 0
const count1 = ref<number>(0)
onMounted(() => {
  const el = document.getElementById('data')
  if (el) {
    console.log(`成功抓取 div#data`)
    el.innerText = `Count = ${count}`
  }
})
</script>

<template>
  <div id="data"></div>
  <div>Count1 = {{ count1 }}</div>
</template>
