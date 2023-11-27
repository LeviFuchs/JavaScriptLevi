const http = require('http');
const bl = require('bl');

// Get the URLs from the command-line arguments
const urls = process.argv.slice(2);

// Function to make an HTTP GET request and collect data
function fetchData(url, callback) {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return callback(err);
      }
      callback(null, data.toString());
    }));
  });
}

// Keep track of the number of completed requests
let completedRequests = 0;

// Array to store the results in the order of the URLs
const results = [];

// Loop through each URL and make an asynchronous request
urls.forEach((url, index) => {
  fetchData(url, (err, data) => {
    if (err) {
      console.error(`Error fetching data from ${url}: ${err.message}`);
    } else {
      // Store the data in the correct order
      results[index] = data;
      completedRequests++;

      // Check if all requests have completed
      if (completedRequests === urls.length) {
        // Print the results in order
        results.forEach(result => console.log(result));
      }
    }
  });
});
