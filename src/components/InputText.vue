<template>
  <div class="mb-5">
    <Label>{{ label }}</Label>
    <div class="relative">
      <div v-if="type" class="absolute top-0 left-0 inset-y-0 w-12 flex justify-center items-center text-slate-500">
        <Icon :type="type" />
      </div>
      <input class="bg-white w-full h-12 border border-gray-300 pr-4 pl-12 rounded-lg text-lg text-gray-900" :type="type" :placeholder="placeholder">
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