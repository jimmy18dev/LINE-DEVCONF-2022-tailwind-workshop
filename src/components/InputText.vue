<template>
  <div class="flex flex-col mb-4">
    <Label>{{ label }}</Label>
    <div class="flex flex-col relative">
      <div v-if="type" class="text-gray-500 absolute inset-y-0 left-0 flex items-center justify-center w-10">
        <font-awesome-icon v-if="type === 'text'" :icon="['fas', 'user']" />
        <font-awesome-icon v-if="type === 'password'" :icon="['fas', 'key']" />
        <font-awesome-icon v-if="type === 'email'" :icon="['fas', 'envelope']" />
      </div>
      <input :type="type" class="pl-10 pr-4 py-3 border border-gray-300 rounded-xl" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Label from '../components/Label.vue'

export default defineComponent({
  name: 'InputText',
  components: {
    Label,
  },
  props: {
    label: String,
    placeholder: String,
    type: String
  },
})
</script>