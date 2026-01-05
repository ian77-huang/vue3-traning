<script setup lang="ts">
const rawHtml = `<span style="color:red;">這段文字應該是紅色的</span>`
</script>

<template>
  <div class="text-red-400 mt-5 text-4xl">
    <div>非常危險！！！</div>
    <div>注意使用！！！</div>
  </div>
  <div class="mt-5">
    <div>
      <div>使用文字插值：{{ rawHtml }}</div>
      <div>使用v-html指令：<span v-html="rawHtml"></span></div>
    </div>
  </div>
</template>
