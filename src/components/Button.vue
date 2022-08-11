<template>
  <button class="bg-blue-500 text-white rounded-xl h-12 text-lg font-bold mt-auto shadow">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
})
</script>