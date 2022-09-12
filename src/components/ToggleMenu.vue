<template>
  <div class="flex justify-between items-center h-12 pr-4 ml-4">
    <div class="text-lg text-gray-900">{{ label }}</div>
    <ToggleSwitch :on="on" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

export default defineComponent({
  name: 'ToggleMenu',
  props: {
    label: String,
    on: Boolean
  },
  components: {
    ToggleSwitch,
  }
})
</script>