const mymodule = require('./mymodule');

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

// Verwende das Modul, indem du die exportierte Funktion aufrufst
mymodule(directoryPath, fileExtension, (err, data) => {
  if (err) {
    console.error(`Fehler: ${err.message}`);
    return;
  }

  // Gib die gefilterte Liste der Dateien aus
  data.forEach(file => console.log(file));
});
