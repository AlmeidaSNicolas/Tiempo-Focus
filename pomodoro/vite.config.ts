import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Permite que o servidor seja acessado fora do container
    port: 4173,      // Mantém a porta que já está em uso no projeto
    watch: {
      usePolling: true, // Necessário para detectar mudanças de arquivos no volume
    },
  },
})