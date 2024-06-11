import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: './', // Use relative paths
  build: {
    rollupOptions: {
      // Ensure all dependencies are bundled
      external: [],
      output: {
        manualChunks: {
          vendor: [
            'vue',
            'vue-router',
            'buefy',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/free-brands-svg-icons'
          ]
        }
      }
    }
  }
})
