import QRCode from 'qrcode';
import { site } from '../../shared/site';

export const callingCard = {
  name: site.name,
  tagline: 'Code, curiosity, and a few side quests.',
  url: `${site.url}/contact/#card`,
  website: site.url,
  github: site.github,
  linkedin: 'https://www.linkedin.com/in/eric-wich-b327b978/',
};

export function contactFile() {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Wich;Eric;;;',
    `FN:${callingCard.name}`,
    `URL:${callingCard.url}`,
    'NOTE:Code\\, curiosity\\, and a few side quests.',
    'END:VCARD',
    '',
  ].join('\r\n');
}

export async function contactQr() {
  return QRCode.toString(callingCard.url, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 4,
    width: 240,
    color: { dark: '#202947', light: '#ffffff' },
  });
}
