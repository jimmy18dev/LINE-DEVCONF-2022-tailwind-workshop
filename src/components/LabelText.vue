<template>
  <div class="text-lg text-gray-900 mb-2 font-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelText',
})
</script>