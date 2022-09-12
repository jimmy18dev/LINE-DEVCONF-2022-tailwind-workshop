<template>
  <button class="w-full h-12 bg-blue-500 text-lg text-white rounded-lg shadow font-bold">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
})
</script>