<script setup lang="ts">
function handleClick() {
  console.log(`按鈕被點擊了`)
}
</script>

<template>
  <div class="flex gap-2">
    <button class="btn-default" v-on:click="handleClick">正常 v-on</button>
    <button class="btn-default" @click="handleClick">縮寫 @</button>
  </div>
</template>
