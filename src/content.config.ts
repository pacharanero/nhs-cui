import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docsCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './markdown'
  }),
  schema: docsSchema()
});

export const collections = {
  docs: docsCollection
};
