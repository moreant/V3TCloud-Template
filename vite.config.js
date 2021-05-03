import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    entries: 'vant/es/**/*.js'
  },
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style (name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file 
              return false
            }
            return `vant/es/${name}/style/index.js`
          }
        }
      ]
    })
  ],
  alias: {
    '@': path.resolve(__dirname, "src")
  }
})
