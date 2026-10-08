import test from 'node:test';
import assert from 'node:assert/strict';
import { isPublished, postUrl } from '../src/features/writing/publishing.mjs';
const now = new Date('2026-10-07T12:00:00Z');
test('drafts and future posts never enter public indexes', () => {
  assert.equal(isPublished({ date: '2020-10-07', draft: true }, now), false);
  assert.equal(isPublished({ date: '2026-10-08', draft: false }, now), false);
  assert.equal(isPublished({ date: '2026-10-07', draft: false }, now), true);
  assert.equal(isPublished({ date: 'invalid', draft: false }, now), false);
});
test('posts use the writing route', () => {
  assert.equal(postUrl('a-new-post'), '/writing/a-new-post/');
});
