const http = require('http');
// Create an HTTP server
const server = http.createServer((req, res) => {
 // Set response HTTP header with HTTP status and Content type
 res.writeHead(200, {'Content-Type': 'text/plain'});
 // Send the response body
 res.end('Hello Students, Hope you are doing well\n');
});
// Listen on port 3000
server.listen(3000, () => {
 console.log('Server is now running at http://localhost:3000/');
});