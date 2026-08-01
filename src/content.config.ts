import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        description: z.string(),
        id: z.string().optional(),
        kind: z
          .enum(["concept", "path", "guide", "reference"])
          .default("guide"),
        status: z.enum(["draft", "review", "stable"]).default("draft"),
        level: z.number().int().nonnegative().optional(),
        estimated_minutes: z.number().int().positive().optional(),
        prerequisites: z.array(z.string()).default([]),
        tags: z.array(z.string()).default([]),
        learning_objectives: z.array(z.string()).default([]),
      }),
    }),
  }),
};
