const http = require('http');

// Get the URL from the command-line arguments
const url = process.argv[2];

// Perform an HTTP GET request
http.get(url, (response) => {
  // Set the encoding to UTF-8
  response.setEncoding('utf8');

  // Event handler for the "data" event
  response.on('data', (data) => {
    // Write the data to the console
    console.log(data);
  });

  // Event handler for the "error" event
  response.on('error', (error) => {
    console.error(`Error: ${error.message}`);
  });
});
