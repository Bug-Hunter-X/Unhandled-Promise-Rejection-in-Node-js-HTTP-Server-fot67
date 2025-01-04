# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js servers: improperly handling errors thrown within asynchronous operations.  The server doesn't send an error response to the client when an error occurs, resulting in an unhandled promise rejection.

## Bug

The `bug.js` file contains a Node.js HTTP server that simulates an asynchronous operation that might throw an error.  If the asynchronous operation fails, the error is caught, but no proper response is sent to the client. This results in an unhandled promise rejection.

## Solution

The `bugSolution.js` file provides a corrected version. It properly handles the error by sending an appropriate error response (e.g., a 500 Internal Server Error) to the client.