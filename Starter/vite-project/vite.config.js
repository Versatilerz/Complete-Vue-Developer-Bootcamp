import eslintPlugin from "vite-plugin-eslint";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [eslintPlugin()],
});
