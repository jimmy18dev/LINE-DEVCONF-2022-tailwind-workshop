<template>
  <div class="mb-3 text-gray-900 font-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Label',
})
</script>