const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const uppercasedBody = body.toUpperCase();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(uppercasedBody);
    });
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
