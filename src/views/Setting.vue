<template>
  <div>
    <Profile />
    <Section>
      <ToggleMenu label="Notification sound" />
      <ToggleMenu label="Hide my likes" />
      <ToggleMenu label="Share your information" />
    </Section>
    <Section>
      <ToggleMenu label="Send Auto-Reply" />
      <ToggleMenu label="Email Notifications" />
      <ToggleMenu label="Newsletter" />
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToggleMenu from '@/components/ToggleMenu.vue'
import Profile from '@/components/Profile.vue'
import Section from '@/components/Section.vue'

export default defineComponent({
  name: 'Setting',
  components: {
    ToggleMenu,
    Section,
    Profile,
  },
})
</script>