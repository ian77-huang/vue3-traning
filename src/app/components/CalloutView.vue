<script setup lang="ts">
import { cn, cva } from '@/app/utils'

defineOptions({
  inheritAttrs: false,
})
const { color = 'default' } = defineProps<{ color?: 'default' | 'event' }>()

const variants = cva(``, {
  variants: {
    color: {
      default: 'callout-default',
      event: 'callout-event',
    },
  },
})
</script>
<template>
  <div :class="cn($attrs.class as string, variants({ color }))">
    <slot></slot>
  </div>
</template>
