const http = require('http');
const PORT = 3000;
http.createServer((req, res) => {
  res.end('Hello from CI/CD app!');
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
