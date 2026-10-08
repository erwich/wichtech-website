export function pageDetails(href, title, referrer = '') {
  const current = new URL(href);
  let previous = '';
  try {
    const url = new URL(referrer);
    previous = url.origin + url.pathname;
  } catch {}
  return {
    page_location: current.origin + current.pathname,
    page_title: title,
    page_referrer: previous,
  };
}
