import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        {
          'vue': ['ref', 'computed', 'watch', 'onMounted', 'inject'],
          'vue-router': ['useRouter', 'RouterView'],
          '@vueuse/core': [
            'useStorage',
            'useEventListener',
            'useDark',
            'useNavigatorLanguage',
            'useResizeObserver',
            'useSwipe'
          ]
        }
      ],
      dts: './types/imports.d.ts',
      defaultExportByFilename: true,
      dirs: [
        './src/utils',
        './src/stores'
      ]
    }),
    Components({
      dirs: ['./src/components', './src/assets/svg'],
      extensions: ['vue'],
      deep: true,
      dts: './types/components.d.ts'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
