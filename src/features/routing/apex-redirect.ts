export default {
  fetch(request: Request): Response {
    const url = new URL(request.url);
    url.protocol = 'https:';
    url.hostname = 'www.wich.tech';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  },
};
