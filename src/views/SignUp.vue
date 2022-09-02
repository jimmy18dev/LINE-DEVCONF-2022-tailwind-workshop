<template>
  <div class="fullscreen">
    <h1 class="center">Create an account</h1>
    <div class="content">
      <InputText
        type="text"
        label="Fullname"
        placeholder="First name and Last name"
      />
      <InputText
        type="email"
        label="Email"
        placeholder="Enter email address"
      />
      <InputText
        type="password"
        label="Password"
        placeholder="Enter password"
      />
    </div>
    <Button>Register</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import InputText from '@/components/InputText.vue'

export default defineComponent({
  name: 'SignUp',
  components: {
    Button,
    InputText,
  },
})
</script>