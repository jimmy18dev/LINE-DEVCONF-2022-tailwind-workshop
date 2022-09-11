<template>
  <div>
    <div>{{ label }}</div>
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