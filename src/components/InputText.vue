<template>
  <div>
    <LabelText>{{ label }}</LabelText>
    <div>
      <div v-if="type">
        <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
        <font-awesome-icon v-if="type === 'password'" :icon="['fas', 'key']" />
        <font-awesome-icon v-if="type === 'email'" :icon="['fas', 'envelope']" />
      </div>
      <input :type="type" :placeholder="placeholder">
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