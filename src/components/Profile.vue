<template>
  <div class="profile">
    <img class="profile-image" src="@/assets/images/avatar.jpg" alt="Maxwell">
    <div class="profile-name">Hello, Maxwell</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Profile',
})
</script>