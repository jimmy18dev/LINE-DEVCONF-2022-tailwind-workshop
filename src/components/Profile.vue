<template>
  <div class="flex items-center p-4">
    <img
      class="w-12 h-12 rounded-full mr-4"
      src="@/assets/images/avatar.jpg"
      alt="Maxwell"
    >
    <div class="text-2xl text-gray-900">Hello, Maxwell</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
})
</script>