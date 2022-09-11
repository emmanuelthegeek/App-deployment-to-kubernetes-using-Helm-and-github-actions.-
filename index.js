const http = require('http');

const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Welcome to my world of Docker\n')
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
});
