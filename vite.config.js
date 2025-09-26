import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/books": path.resolve(__dirname, "src/assets/books"),
			"@/shared": path.resolve(__dirname, "src/components/shared"),
			"@": path.resolve(__dirname, "src"),
		},
	},
});
