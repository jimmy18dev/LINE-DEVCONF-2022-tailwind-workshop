<template>
  <div class="flex flex-col bg-white fixed inset-0">
    <h1 class="m-8 text-2xl text-center">Create an account</h1>
    <div class="flex flex-col mx-4">
      <InputText type="text" label="Fullname" placeholder="First name and Last name" />
      <InputText type="email" label="Email" placeholder="Enter email address" />
      <InputText type="password" label="Password" placeholder="Enter password" />
    </div>
    <Button class="m-4">Register</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../components/Button.vue'
import InputText from '../components/InputText.vue'

export default defineComponent({
  name: 'SignUp',
  components: {
    Button,
    InputText,
  },
})
</script>