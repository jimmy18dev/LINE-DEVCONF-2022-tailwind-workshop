import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginHtmlEnv from 'vite-plugin-html-env'

export default defineConfig({
  server: {
    port: 3030,
  },
  plugins: [
    vue(),
    VitePluginHtmlEnv(),
  ],
  resolve: {
    alias: [
      {
        find: '@', replacement: require('path').resolve(__dirname, 'src')
      },
    ],
  },
})
