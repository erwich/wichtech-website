/** Shared by build routes, indexes, and RSS. */
export function isPublished(data, now = new Date()) {
  return !data.draft && new Date(data.date).getTime() <= now.getTime();
}
export function postUrl(slug) {
  return slug === 'google-chrome-dino-hax'
    ? '/google-chrome-dino-hax/'
    : `/writing/${slug}/`;
}
