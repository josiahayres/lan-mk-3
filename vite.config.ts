import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lan-mk-3/",
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  build: { outDir: "build" },
});
