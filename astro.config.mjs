import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const site = process.env.SITE_URL ?? "http://localhost:4321";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  integrations: [
    starlight({
      title: "physics2cse",
      description:
        "Computing from first principles: measurement, charge, circuits, logic, architecture, and intelligent systems.",
      customCss: ["./src/styles/site.css"],
      favicon: "/favicon.svg",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/AyushSolanki-17/physics2cse",
        },
      ],
      sidebar: [
        {
          label: "Start",
          items: [
            { label: "Overview", slug: "" },
            {
              label: "From Charge to Hello World",
              slug: "paths/from-charge-to-hello-world",
            },
          ],
        },
        {
          label: "Foundations",
          items: [
            {
              label: "Measurement, Models, and Units",
              slug: "foundations/measurement-models-units",
            },
          ],
        },
        {
          label: "Physics",
          items: [
            {
              label: "Matter and Electric Charge",
              slug: "physics/matter-electric-charge",
            },
            {
              label: "Electric Fields and Potential",
              slug: "physics/electric-fields-potential",
            },
          ],
        },
        {
          label: "Electronics",
          items: [
            {
              label: "Voltage, Current, and Resistance",
              slug: "electronics/voltage-current-resistance",
            },
            {
              label: "A First Circuit Model",
              slug: "electronics/first-circuit-model",
            },
          ],
        },
      ],
    }),
  ],
});
