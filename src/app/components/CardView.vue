<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <div class="p-4 border rounded-base bg-slate-50">
    <p class="text-sm mb-2 font-semibold">{{ title }}</p>
    <slot></slot>
  </div>
</template>
