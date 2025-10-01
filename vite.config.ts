import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const plugins = [react(), tailwindcss()]

export default defineConfig(({ mode }) => ({ plugins, server: { open: mode === 'development' } }))
