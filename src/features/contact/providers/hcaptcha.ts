// Web3Forms' shared site key for its free hCaptcha integration.
const sitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
type CaptchaAPI = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    hcaptcha?: CaptchaAPI;
    wichCaptchaReady?: () => void;
  }
}
let ready: Promise<CaptchaAPI> | undefined;
function loadCaptcha(): Promise<CaptchaAPI> {
  return (ready ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const timeout = window.setTimeout(() => {
      script.remove();
      ready = undefined;
      reject(
        new Error(
          'Verification could not load. Please reload the page and try again.',
        ),
      );
    }, 15000);
    window.wichCaptchaReady = () => {
      window.clearTimeout(timeout);
      resolve(window.hcaptcha!);
    };
    script.src =
      'https://js.hcaptcha.com/1/api.js?onload=wichCaptchaReady&render=explicit&recaptchacompat=off';
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      ready = undefined;
      reject(
        new Error(
          'Verification could not load. Please reload the page and try again.',
        ),
      );
    };
    document.head.append(script);
  }));
}
export async function mountCaptcha(
  container: HTMLElement,
  report: (message: string) => void,
) {
  const api = await loadCaptcha();
  if (!container.isConnected) return;
  const id = api.render(container, {
    sitekey,
    theme: document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
    size: container.clientWidth < 304 ? 'compact' : 'normal',
    callback: () => report(''),
    'expired-callback': () =>
      report('Verification expired. Please complete it again before sending.'),
    'error-callback': () =>
      report(
        'Verification ran into a problem. Please try the checkbox again or reload the page.',
      ),
  });
  container.dataset.widgetId = id;
  return () => api.reset(id);
}
