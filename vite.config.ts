import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({
    plugins: [['module:@preact/signals-react-transform']],
    // Ensure the transform runs before Oxc's JSX transformation
  }),],
})
