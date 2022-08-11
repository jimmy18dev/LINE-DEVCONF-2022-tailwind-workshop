<template>
  <div @click="onToggle">
    <font-awesome-icon v-if="isOn" class="fa-2xl text-green-500" :icon="['fas', 'toggle-on']" />
    <font-awesome-icon v-else class="text-gray-200 fa-flip-horizontal fa-2xl" :icon="['fas', 'toggle-on']" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  setup () {
    const isOn = ref(false)
    const onToggle = (): void => {
      isOn.value = !isOn.value
    }
    return {
      onToggle,
      isOn
    }
  }
})
</script>