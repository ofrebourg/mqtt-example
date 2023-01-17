import inject from '@rollup/plugin-inject'
import * as path from 'path'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import ViteComponents from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { createSvgPlugin } from 'vite-plugin-vue2-svg'

export default defineConfig({
  plugins: [
    createVuePlugin(),
    createSvgPlugin({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            removeViewBox: false
          }
        ]
      }
    }),
    ViteComponents({
      resolvers: [VuetifyResolver()]
    })
  ],
  server: {
    port: 8080
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    chunkSizeWarningLimit: 500, // default max
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })]
    }
  }
})
