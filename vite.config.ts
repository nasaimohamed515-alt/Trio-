import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cartographer from "@replit/vite-plugin-cartographer";
import devBanner from "@replit/vite-plugin-dev-banner";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    cartographer(),
    devBanner(),
    runtimeErrorModal(),
  ],
  root: "client",
  build: {
    outDir: "../dist/client",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
});
