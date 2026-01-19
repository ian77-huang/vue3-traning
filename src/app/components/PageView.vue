<script setup lang="ts">
import { cn } from '@/app/utils'

defineOptions({
  inheritAttrs: false,
})
const { title = '' } = defineProps<{ title?: string }>()
</script>
<template>
  <div :class="cn(`p-8 max-w-2xl mx-auto space-y-6`, $attrs.class as string)">
    <h2 class="text-2xl font-bold text-heading text-center">{{ title }}</h2>
    <slot></slot>
  </div>
</template>
