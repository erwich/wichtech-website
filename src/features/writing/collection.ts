import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
export const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/features/writing/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    date: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().default(false),
    archived: z.boolean().default(false),
  }),
});
