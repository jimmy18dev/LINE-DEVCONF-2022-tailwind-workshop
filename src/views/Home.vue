<template>
  <div class="fixed bg-white flex flex-col p-4 inset-0">
    <div class="mb-auto">
      <img class="rounded-lg" src="../assets/images/cover.jpg" alt="Fashion Up Your Look">
      <h1 class="text-2xl text-gray-900 font-bold my-5">Fashion Up Your Look</h1>
      <p class="text-lg text-slate-500">Welcome to the world's most marketplace. Buying and Selling of goods or services using the internet.</p>
    </div>
    <Button>Get Started</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Button,
  },
})
</script>
