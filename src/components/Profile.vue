<template>
  <div class="flex items-center p-4">
    <img class="rounded-full w-12 h-12 mr-4 shadow" src="@/assets/images/avatar.jpg" alt="Maxwell">
    <div class="text-2xl text-gray-900 font-bold">Hello, Maxwell</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
})
</script>