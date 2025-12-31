<script setup lang="ts">
import type { ListItemProps } from '../types'

import { ref, watch } from 'vue'

const props = defineProps<ListItemProps>()

const className = ref<string>('')

watch(
  () => props.total,
  () => {
    className.value = 're-render-flash'
    setTimeout(() => {
      className.value = ''
    }, 800)
    console.log(`元件 ${props.id} 重新渲染了`)
  },
)
</script>
<template>
  <div class="item" :class="className">
    <span class="tag">編號：{{ id }}</span>
    <strong>內容：{{ text }}</strong>
    <span>&nbsp;&nbsp;</span>
    <span>數量：{{ total }}</span>
  </div>
</template>
