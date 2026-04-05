import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 // Ensure this line looks exactly like this

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
     // This must match the name in the import above
  ],
})