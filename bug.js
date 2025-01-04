const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    console.error('Error:', error);
    // Incorrect error handling: Doesn't send an error response to the client
  });
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
  return Promise.resolve();
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});