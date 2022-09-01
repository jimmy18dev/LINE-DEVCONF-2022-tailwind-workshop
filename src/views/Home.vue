<template>
  <div class="fullscreen">
    <div class="content">
      <img class="cover" src="../assets/images/cover.jpg" alt="Fashion Up Your Look">
      <h1>Fashion Up Your Look</h1>
      <p>Welcome to the world's most marketplace. Buying and Selling of goods or services using the internet.</p>
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
