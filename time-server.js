const net = require('net');

const server = net.createServer((socket) => {
  function formatDate(date) {
    return `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}\n`;
  }
  function zeroFill(num) {
    return num < 10 ? `0${num}` : num;
  }

  const formattedDate = formatDate(new Date());

  socket.end(formattedDate);
});

const port = process.argv[2];

server.listen(port);
