/** Provider-specific response handling. Never treat HTTP success alone as delivery. */
export async function submitContact(formData, request = fetch) {
  const response = await request('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(15000),
  });
  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(
      'The message service returned an unexpected response. Please try again.',
    );
  }
  if (!response.ok || result.success !== true)
    throw new Error(
      'Your message could not be sent. Please try again in a moment.',
    );
}
