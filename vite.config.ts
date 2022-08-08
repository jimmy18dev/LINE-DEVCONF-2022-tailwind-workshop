import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginHtmlEnv(),
  ]
})
