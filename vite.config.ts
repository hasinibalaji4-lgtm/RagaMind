import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Set VITE_BASE_PATH to /REPOSITORY-NAME/ in GitHub Actions. Use / locally.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return { plugins: [react()], base: env.VITE_BASE_PATH || '/' }
})
