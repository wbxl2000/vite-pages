import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md']
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Markdown({
      headEnabled: true // <--
    }),
  ],
})