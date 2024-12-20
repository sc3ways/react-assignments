import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "https://sc3ways.github.io/react-assignment/",
  plugins: [react()],
});
