import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const html = (path) => readFile(join('dist', path), 'utf8');
test('launch pages and migration assets exist', async () => {
  for (const path of [
    'index.html',
    'about/index.html',
    'contact/index.html',
    'projects/index.html',
    'projects/revelation/index.html',
    'projects/serenity-hobbies/index.html',
    'writing/index.html',
    'google-chrome-dino-hax/index.html',
    '404.html',
    'rss.xml',
    'robots.txt',
    'sitemap-index.xml',
    'social-card.png',
  ])
    await access(join('dist', path));
  const home = await html('index.html');
  assert.match(home, /Revelation/);
  assert.match(home, /Serenity Hobbies/);
  assert.doesNotMatch(
    home,
    /Here&#39;s Jesus|Sample topic|Good architecture should/,
  );
  const article = await html('google-chrome-dino-hax/index.html');
  assert.match(article, /From the archive/);
  assert.match(article, /property="og:type" content="article"/);
  assert.match(
    article,
    /rel="canonical" href="https:\/\/www.wich.tech\/google-chrome-dino-hax\/?"/,
  );
});
test('all built local links and image sources resolve', async () => {
  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    return (
      await Promise.all(
        entries.map((e) =>
          e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name),
        ),
      )
    ).flat();
  }
  const files = await walk('dist');
  for (const file of files.filter((f) => f.endsWith('.html'))) {
    const page = await readFile(file, 'utf8');
    for (const match of page.matchAll(
      /(?:href|src)="(\/(?!\/)[^"?#]*)(?:[?#][^"]*)?"/g,
    )) {
      const path = decodeURIComponent(match[1]);
      const local = join('dist', path);
      const exists = await access(local).then(
        () => true,
        () => false,
      );
      assert.ok(exists, `${file} points to missing ${path}`);
    }
  }
});
test('the contact form cannot send without configured delivery', async () => {
  const page = await html('contact/index.html');
  if (
    process.env.SITE_PREVIEW === 'true' ||
    !process.env.PUBLIC_WEB3FORMS_KEY
  ) {
    assert.match(page, /data-enabled="false"/);
    assert.match(page, /Contact form coming soon/);
    assert.doesNotMatch(page, /name="access_key"/);
  }
});
