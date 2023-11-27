const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    const filePath = process.argv[3];

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('File not found');
      } else {
        const fileStream = fs.createReadStream(filePath);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        fileStream.pipe(response);
      }
    });
  } else {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end('Method Not Allowed');
  }
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
