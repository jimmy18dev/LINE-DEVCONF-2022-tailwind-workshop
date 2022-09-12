<template>
  <div>
    <Label>{{ label }}</Label>
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
import Label from '@/components/Label.vue'
import Icon from '@/components/Icon.vue'

export default defineComponent({
  name: 'InputText',
  components: {
    Label,
    Icon,
  },
  props: {
    label: String,
    placeholder: String,
    type: String
  },
})
</script>