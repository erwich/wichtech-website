import test from 'node:test';
import assert from 'node:assert/strict';
import { pageDetails } from '../src/features/analytics/pageview.mjs';
test('analytics excludes query strings and fragments from page URLs and referrers', () => {
  assert.deepEqual(
    pageDetails(
      'https://www.wich.tech/contact/?email=private#message',
      'Contact',
      'https://example.com/path?token=private#section',
    ),
    {
      page_location: 'https://www.wich.tech/contact/',
      page_title: 'Contact',
      page_referrer: 'https://example.com/path',
    },
  );
});
test('direct visits have an empty analytics referrer', () => {
  assert.equal(pageDetails('https://www.wich.tech/', 'Home').page_referrer, '');
});
