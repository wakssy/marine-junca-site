import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
  },
  build: {
    // Le bundle serveur ne sert qu'au pré-rendu : inutile d'y recopier images et vidéos
    copyPublicDir: !isSsrBuild,
  },
}))
