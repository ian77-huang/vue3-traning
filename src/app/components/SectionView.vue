<script setup lang="ts">
import { cn, cva } from '@/app/utils'

defineOptions({
  inheritAttrs: false,
})
const { title = '', color = 'slate' } = defineProps<{
  title?: string
  color?: 'slate' | 'purple' | 'orange' | 'blue'
}>()

const variants = cva(``, {
  variants: {
    bgColor: {
      slate: 'bg-slate-50',
      purple: 'bg-purple-50',
      orange: 'bg-orange-50',
      blue: 'bg-blue-50',
    },
    textColor: {
      slate: 'text-slate-800',
      purple: 'text-purple-800',
      orange: 'text-orange-800',
      blue: 'text-blue-800',
    },
  },
})
</script>
<template>
  <section
    :class="
      cn(`p-4 border rounded-base space-y-2`, $attrs.class as string, variants({ bgColor: color }))
    "
  >
    <p :class="cn(`font-semibold mb-2`, variants({ textColor: color }))">{{ title }}</p>
    <slot></slot>
  </section>
</template>
