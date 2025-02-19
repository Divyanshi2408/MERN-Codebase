const http = require('http');
// Make a request to the server
const options = {
 hostname: 'localhost',
 port: 3000,
 path: '/',
 method: 'GET'
};
const req = http.request(options, (res) => {
 let data = '';
 // Receive data chunks
 res.on('data', (chunk) => {
 data += chunk;
 });
 // End of data reception
 res.on('end', () => {
 console.log('Response from server:', data);
 });
});
// Handle request errors
req.on('error', (error) => {
 console.error('Error making request:', error);
});
// End the request
req.end();