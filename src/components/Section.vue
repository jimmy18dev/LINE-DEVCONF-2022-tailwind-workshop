<template>
  <div class="mx-4 bg-white mb-4 border border-gray-100 divide-y shadow rounded-xl">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
})
</script>