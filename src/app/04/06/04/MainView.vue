<script setup lang="ts">
import { ref } from 'vue'

const message = ref<string>('')

const handle = (event: InputEvent) => {
  message.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="flex gap-2 mt-5">
    <input type="text" value="" class="input-default" @input="handle($event)" />
  </div>
  <div class="mt-5">
    {{ message }}
  </div>
</template>
