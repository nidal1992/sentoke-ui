import { defineConfig } from "vite";
import { resolve } from "path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      tsconfigPath: "./tsconfig.app.build.json",
    }),
    vanillaExtractPlugin(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@vanilla-extract/css",
        "@vanilla-extract/dynamic",
      ],
    },
  },
});
