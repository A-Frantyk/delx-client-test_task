import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sassDts from "vite-plugin-sass-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  server: {
    open: "/",
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/_variables.scss";`,
      },
    },
  },
});
