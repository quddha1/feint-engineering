import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = fileURLToPath(new URL('./public/', import.meta.url));
const port = Number.parseInt(process.env.PORT ?? '3000', 10);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function resolveFile(pathname) {
  const requestedPath = pathname === '/' ? '/index.html' : pathname;
  const normalizedPath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, '');
  const filePath = join(rootDirectory, normalizedPath);

  return filePath.startsWith(rootDirectory) ? filePath : null;
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
  const filePath = resolveFile(decodeURIComponent(requestUrl.pathname));

  if (!filePath || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`FEINT ENGINEERING is running at http://localhost:${port}`);
});
