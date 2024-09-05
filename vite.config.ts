import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow connections from any network interface
    port: 5173,       // Port number (default is 3000; you can use 5173 or another port)
    strictPort: true  // Ensure that the port is strictly used (optional)
  },
})
