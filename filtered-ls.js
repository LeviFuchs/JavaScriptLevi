// list-files.js

// Importiere die 'fs' (Dateisystem) und 'path' (Pfad) Module
const fs = require('fs');
const path = require('path');

// Erhalte Verzeichnis und Dateierweiterung von den Befehlszeilenargumenten
const directoryPath = process.argv[2];  // Das Verzeichnis, das durchsucht werden soll
const fileExtension = process.argv[3];  // Die Dateierweiterung für die Filterung

// Lese das Verzeichnis asynchron
fs.readdir(directoryPath, (error, files) => {
  if (error) {
    // Handle-Funktion für Fehler beim Lesen des Verzeichnisses
    console.error(`Fehler beim Lesen des Verzeichnisses: ${error.message}`);
    return;
  }

  // Filtere Dateien nach ihrer Erweiterung
  const filteredFiles = files.filter(file => path.extname(file) === `.${fileExtension}`);

  // Gib die gefilterte Liste der Dateien aus
  filteredFiles.forEach(file => console.log(file));
});
