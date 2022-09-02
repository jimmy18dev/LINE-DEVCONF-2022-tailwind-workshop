<template>
  <div class="bg-white flex flex-col mx-4 mb-5 rounded-lg shadow divide-y divide-gray-200">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
})
</script>