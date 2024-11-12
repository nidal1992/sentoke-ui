import { defineConfig } from "vite";
import { resolve } from "path";

import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["lib"],
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: "./tsconfig.app.build.json",
    }),
    vanillaExtractPlugin(),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
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
