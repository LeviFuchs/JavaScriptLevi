// count-newlines.js

const fs = require('fs');

// Get the file path from the command-line arguments
const filePath = process.argv[2];

// Read the file synchronously
try {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Count the number of newlines
  const newlineCount = (fileContent.match(/\n/g) || []).length;

  // Print the result to the console
  console.log(newlineCount);
} catch (error) {
  // Handle errors, e.g., if the file doesn't exist
  console.error(`Error reading the file: ${error.message}`);
}
