// svg-components.d.ts
declare module "virtual:svg-components" {
  import type { DefineComponent, SVGAttributes } from "vue";
  const icons: {
    [key: string]: DefineComponent<SVGAttributes>;
  };
  export default icons;
}
