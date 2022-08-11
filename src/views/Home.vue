<template>
  <div class="flex flex-col bg-white fixed inset-0">
    <div class="p-4 flex flex-col">
      <img class="rounded-xl mb-4 shadow" src="../assets/images/cover.jpg" alt="Fashion Up Your Look">
      <h1 class="text-2xl mb-4">Fashion Up Your Look</h1>
      <p class="text-lg text-gray-500">Welcome to the world's most marketplace. Buying and Selling of goods or services using the internet.</p>
    </div>
    <Button class="m-4">Get Started</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
})
</script>