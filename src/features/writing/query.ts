import { getCollection } from 'astro:content';
import { isPublished, postUrl } from './publishing.mjs';
export { postUrl };
export async function getPublishedPosts() {
  const posts = (await getCollection('posts')).filter((post) =>
    isPublished(post.data),
  );
  const slugs = posts.map((post) => post.data.slug);
  if (new Set(slugs).size !== slugs.length)
    throw new Error('Article slugs must be unique.');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
