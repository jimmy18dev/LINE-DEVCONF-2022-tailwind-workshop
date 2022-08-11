<template>
  <div>
    <div>{{ label }}</div>
    <ToggleSwitch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

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