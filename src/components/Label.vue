<template>
  <div class="mb-2 font-sarabun-medium">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Label',
})
</script>