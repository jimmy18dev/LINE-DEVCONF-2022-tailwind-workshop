<template>
  <div class="bg-white flex flex-col p-4 fixed inset-0">
    <div class="flex flex-col mb-auto">
      <img
        class="rounded-lg shadow"
        src="../assets/images/cover.jpg"
        alt="Fashion Up Your Look"
      >
      <h1 class="text-2xl text-gray-900 my-5">Fashion Up Your Look</h1>
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
