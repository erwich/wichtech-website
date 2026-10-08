import test from 'node:test';
import assert from 'node:assert/strict';
import { submitContact } from '../src/features/contact/providers/web3forms.mjs';
function verifiedForm() {
  const form = new FormData();
  form.set('h-captcha-response', 'test-token');
  return form;
}
test('missing CAPTCHA never sends a request', async () => {
  let called = false;
  await assert.rejects(
    submitContact(new FormData(), async () => {
      called = true;
    }),
    /verification checkbox/,
  );
  assert.equal(called, false);
});
test('HTTP success with a provider rejection is not shown as sent', async () => {
  await assert.rejects(
    submitContact(
      verifiedForm(),
      async () =>
        new Response(JSON.stringify({ success: false }), { status: 200 }),
    ),
    /could not be sent/,
  );
});
test('HTTP error, malformed JSON, and connection failure remain failures', async () => {
  await assert.rejects(
    submitContact(
      verifiedForm(),
      async () =>
        new Response(JSON.stringify({ success: true }), { status: 429 }),
    ),
    /could not be sent/,
  );
  await assert.rejects(
    submitContact(
      verifiedForm(),
      async () => new Response('<html>Error</html>'),
    ),
    /unexpected response/,
  );
  await assert.rejects(
    submitContact(verifiedForm(), async () => {
      throw new Error('offline');
    }),
    /offline/,
  );
});
test('only an explicit provider success completes delivery', async () => {
  let captured;
  await submitContact(verifiedForm(), async (_url, options) => {
    captured = options;
    return new Response(JSON.stringify({ success: true }));
  });
  assert.equal(captured.method, 'POST');
  assert.equal(captured.body.get('h-captcha-response'), 'test-token');
  assert.ok(captured.signal instanceof AbortSignal);
});
