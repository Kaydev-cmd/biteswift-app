import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    historyApiFallback: true, // This ensures routes are redirected to index.html during development
  },
});
