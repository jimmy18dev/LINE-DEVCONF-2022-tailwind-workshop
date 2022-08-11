<template>
  <div class="flex justify-between items-center ml-4 py-2 pr-4">
    <div class="flex-1">{{ label }}</div>
    <ToggleSwitch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'

export default defineComponent({
  name: 'ToggleMenu',
  props: {
    label: String,
  },
  components: {
    ToggleSwitch,
  }
})
</script>