import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: "esm",
  splitting: false,
  sourcemap: false,
  dts: true,
  platform: "node",
  external: ["fast-glob", "fs-extra", "vite", "vue", "transliteration"],
  async onSuccess() {
    const src = resolve(process.cwd(), "./src/svg-components.d.ts");
    const dest = resolve(process.cwd(), "./dist/svg-components.d.ts");
    await copyFile(src, dest);
  },
});
