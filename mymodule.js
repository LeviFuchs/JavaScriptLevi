const fs = require('fs');
const path = require('path');

// Exportiere die Funktion als Modul
module.exports = function(directory, extension, callback) {
  // Lese das Verzeichnis asynchron
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err); // Bei einem Fehler rufe die Callback-Funktion mit dem Fehler auf
    }

    // Filtere die Dateien nach ihrer Erweiterung
    const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`);

    // Rufe die Callback-Funktion mit null als Fehlerargument und der gefilterten Liste auf
    callback(null, filteredFiles);
  });
};
