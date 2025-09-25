import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/books": path.resolve(__dirname, "src/assets/books"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
