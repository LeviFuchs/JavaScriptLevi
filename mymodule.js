const fs = require('fs');
const path = require('path');

// Export the function as a module
module.exports = function(directory, extension, callback) {
  // Read the directory asynchronously
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err); // In case of an error, invoke the callback function with the error
    }

    // Filter files based on their extension
    const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`);

    // Invoke the callback function with null as the error argument and the filtered list
    callback(null, filteredFiles);
  });
};
