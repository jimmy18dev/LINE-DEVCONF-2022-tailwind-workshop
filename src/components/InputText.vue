<template>
  <div>
    <LabelText>{{ label }}</LabelText>
    <div>
      <div v-if="type">
        <Icon :type="type" />
      </div>
      <input :type="type" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LabelText from '@/components/LabelText.vue'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'InputText',
  components: {
    LabelText,
    Icon,
  },
  props: {
    label: String,
    placeholder: String,
    type: String
  },
})
</script>