import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import jsQR from 'jsqr';

test('calling card saves a reconnect URL without exposing email or phone', async () => {
  const vcard = await readFile('dist/contact/eric-wich.vcf', 'utf8');
  assert.match(vcard, /^BEGIN:VCARD\r\nVERSION:3.0\r\n/);
  assert.match(vcard, /FN:Eric Wich\r\n/);
  assert.match(vcard, /URL:https:\/\/www.wich.tech\/contact\/#card\r\n/);
  assert.doesNotMatch(vcard, /^(?:EMAIL|TEL)[;:]/m);
  assert.ok(vcard.endsWith('END:VCARD\r\n'));
});

test('the rendered QR decodes to the public contact card', async () => {
  const svg = await readFile('dist/contact/card-qr.svg');
  for (const width of [120, 152, 240]) {
    const { data, info } = await sharp(svg)
      .resize(width, width)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const decoded = jsQR(new Uint8ClampedArray(data), info.width, info.height);
    assert.equal(
      decoded?.data,
      'https://www.wich.tech/contact/#card',
      `QR at ${width}px`,
    );
  }
});
