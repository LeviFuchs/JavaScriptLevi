const http = require('http');
const bl = require('bl');

// Get the URL from the command-line arguments
const url = process.argv[2];

// Perform an HTTP GET request
http.get(url, (response) => {
  // Pipe the response stream into the Buffer List
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(`Error: ${err.message}`);
    }

    // Print the length of the data (number of characters)
    console.log(data.length);

    // Print the complete string of characters
    console.log(data.toString());
  }));
});
