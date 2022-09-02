<template>
  <button class="h-12 bg-blue-500 text-white rounded-lg shadow text-lg font-bold w-full">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
})
</script>