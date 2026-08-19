import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const plugins = [react(), tailwindcss(), tsconfigPaths()]

export default defineConfig(({ mode }) => ({
  plugins,
  resolve: { dedupe: ['react', 'react-dom'] },
  server: { open: mode === 'development' },
}))
