// list-files.js

// Import the 'fs' (file system) and 'path' modules
const fs = require('fs');
const path = require('path');

// Get directory and file extension from command-line arguments
const directoryPath = process.argv[2];  // The directory to be searched
const fileExtension = process.argv[3];  // The file extension for filtering

// Read the directory asynchronously
fs.readdir(directoryPath, (error, files) => {
  if (error) {
    // Error-handling function for reading the directory
    console.error(`Error reading the directory: ${error.message}`);
    return;
  }

  // Filter files based on their extension
  const filteredFiles = files.filter(file => path.extname(file) === `.${fileExtension}`);

  // Print the filtered list of files
  filteredFiles.forEach(file => console.log(file));
});
