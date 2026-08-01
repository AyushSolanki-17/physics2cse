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
          href: "https://github.com/ayushsolanki/physics2cse",
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
          items: [{ autogenerate: { directory: "foundations" } }],
        },
        {
          label: "Physics",
          items: [{ autogenerate: { directory: "physics" } }],
        },
        {
          label: "Electronics",
          items: [{ autogenerate: { directory: "electronics" } }],
        },
      ],
    }),
  ],
});
