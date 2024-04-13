import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-tracking-scorm/",
  root: "src",
  plugins: [react()],
  build: {
    outDir: "../dist",
  },
});
