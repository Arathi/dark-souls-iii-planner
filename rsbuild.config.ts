import { resolve } from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  server: {
    port: 53091,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  source: {},
  plugins: [pluginReact(), pluginSass()],
});
