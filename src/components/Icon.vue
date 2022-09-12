<template>
  <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
  <font-awesome-icon v-else-if="type === 'password'" :icon="['fas', 'key']" />
  <font-awesome-icon v-else-if="type === 'email'" :icon="['fas', 'envelope']" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    type: String
  },
})
</script>