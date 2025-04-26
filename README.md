# vite-plugin-svg-vue-component-batch

Vite plugin for importing svg vue components from directory.

## Installation

```shell
npm install -D unplugin-svg-vue-component vite-plugin-svg-vue-component-batch
```

## Usage

vite.config.ts
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgComponent from 'unplugin-svg-vue-component/vite'
import svgComponentBatch from 'vite-plugin-svg-vue-component-batch'
import { resolve } from 'path'

const dirname = import.meta.dirname;

export default defineConfig({
  plugins: [
    vue(),
    svgComponentBatch({
      dir: resolve(dirname, './src/assets'),
    }), // use before unplugin-svg-vue-component
    svgComponent()],
});

```

tsconfig.json
```json
{
  "compilerOptions": {
    "types": ["vite-plugin-svg-vue-component-batch/client"] // for types
  }
}

```

App.vue
```vue
<script setup lang="ts">
import icons from "virtual:svg-components"; // import virtual module
</script>

<template>
  <component v-for="[name, comp] of Object.entries(icons)" :key="name" :is="comp" />
</template>
```

vite-plugin-svg-vue-component-batch/client
```typescript
// default type declaration
declare module "virtual:svg-components" {
  import type { DefineComponent, SVGAttributes } from "vue";
  const icons: {
    [key: string]: DefineComponent<SVGAttributes>;
  };
  export default icons;
}
```
