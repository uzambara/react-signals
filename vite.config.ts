import react from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      //Подключаем плагин для сигналов
      plugins: [['module:@preact/signals-react-transform']]
    })
  ]
})
