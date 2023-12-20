import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'unplugin-vue-markdown/vite'

export default defineConfig({
  plugins: [
    Pages({
      extensions: ['vue', 'md'],
      dirs: 'src/pages',
    }),
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Markdown({
      headEnabled: true // <--
    }),
  ],
})