const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/api/parsetime' && query.iso) {
    const { iso } = query;
    const date = new Date(iso);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    sendJsonResponse(res, response);
  } else if (pathname === '/api/unixtime' && query.iso) {
    const { iso } = query;
    const unixtime = new Date(iso).getTime();
    const response = { unixtime };
    sendJsonResponse(res, response);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

function sendJsonResponse(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
