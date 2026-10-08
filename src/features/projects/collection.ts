import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
export const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/projects/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    website: z.url().optional(),
    source: z.url().optional(),
  }),
});
