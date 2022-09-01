<template>
  <div class="input-box">
    <LabelText>{{ label }}</LabelText>
    <div class="input-container">
      <div class="input-icon" v-if="type">
        <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
        <font-awesome-icon v-if="type === 'password'" :icon="['fas', 'key']" />
        <font-awesome-icon v-if="type === 'email'" :icon="['fas', 'envelope']" />
      </div>
      <input class="input-text" :type="type" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LabelText from '@/components/LabelText.vue'

export default defineComponent({
  name: 'InputText',
  components: {
    LabelText,
  },
  props: {
    label: String,
    placeholder: String,
    type: String
  },
})
</script>