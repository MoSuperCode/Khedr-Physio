import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://mosupercode.github.io",
  base: "/Khedr-Physio",
  integrations: [tailwind()],
});
