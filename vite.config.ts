import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite' // defineConfig, 工具函数, 可以不用 jsdoc 注解也可以获取类型提示
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: '@use "@/styles/index.scss" as *;' },
    },
  },
  plugins: [
    vue(),
    AutoImport({ // element plus 自动导入插件
      resolvers: [ElementPlusResolver()],
    }),
    Components({ // element plus 自动导入插件
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
      ],
    }),
  ],
})
