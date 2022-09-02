<template>
  <div class="mb-5">
    <LabelText>{{ label }}</LabelText>
    <div class=" relative">
      <div class="absolute w-12 h-12 inset-y-0 left-0 bg-transparent flex justify-center items-center text-slate-500" v-if="type">
        <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
        <font-awesome-icon v-if="type === 'password'" :icon="['fas', 'key']" />
        <font-awesome-icon v-if="type === 'email'" :icon="['fas', 'envelope']" />
      </div>
      <input class="h-12 border border-gray-300 w-full pr-4 pl-12 text-lg rounded-lg" :type="type" :placeholder="placeholder">
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