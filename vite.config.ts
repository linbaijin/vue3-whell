import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
    scss: {
      additionalData: '@import "./src/assets/scss/base.scss";' // 添加公共样式
    }
  },
  },
  plugins: [vue()]
})
