<template>
  <div class="mb-5">
    <LabelText>{{ label }}</LabelText>
    <div class="relative">
      <div v-if="type" class="absolute top-0 left-0 inset-y-0 w-12 flex justify-center items-center text-slate-500">
        <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
        <font-awesome-icon v-else-if="type === 'password'" :icon="['fas', 'key']" />
        <font-awesome-icon v-else-if="type === 'email'" :icon="['fas', 'envelope']" />
      </div>
      <input class="bg-white w-full h-12 border border-gray-300 pr-4 pl-12 rounded-lg text-lg text-gray-900" :type="type" :placeholder="placeholder">
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