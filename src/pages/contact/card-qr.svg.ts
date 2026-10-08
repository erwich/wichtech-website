import { contactQr } from '../../features/contact/calling-card';
export async function GET() {
  return new Response(await contactQr(), {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
