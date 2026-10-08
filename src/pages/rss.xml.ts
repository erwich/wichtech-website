import rss from '@astrojs/rss';
import { getPublishedPosts, postUrl } from '../features/writing/query';
import { site } from '../shared/site';
export async function GET() {
  return rss({
    title: `${site.name} — Writing`,
    description: site.description,
    site: site.url,
    items: (await getPublishedPosts()).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post.data.slug),
    })),
  });
}
