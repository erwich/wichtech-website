import { contactFile } from '../../features/contact/calling-card';
export function GET() {
  return new Response(contactFile(), {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="eric-wich.vcf"',
    },
  });
}
