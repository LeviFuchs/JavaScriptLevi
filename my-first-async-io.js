// count-newlines-async.js

const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (error, fileContent) => {
  if (error) {
    // Handle errors, e.g., if the file doesn't exist
    console.error(`Error reading the file: ${error.message}`);
    return;
  }

  // Count the number of newlines
  const newlineCount = (fileContent.match(/\n/g) || []).length;

  // Print the result to the console
  console.log(newlineCount);
});
