<template>
  <div class="flex flex-col bg-white rounded-lg shadow mx-4 mb-4 divide-y divide-gray-200">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
})
</script>