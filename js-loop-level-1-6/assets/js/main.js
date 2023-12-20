// - Lernziel: Anwendung von JavaScript-Konzepten wie Arrays, Schleifen und Methoden, um Daten zu verarbeiten und auszugeben.
// - In dieser Aufgabe soll ein Array von Bildern erstellt werden und die Dateinamen von "image\_1.jpg" bis "image\_100.jpg" sollen ausgegeben werden.
// - Deklariere die Variable letArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Nutze die push() Methode.

let numArray = []

for (num = 1; num <= 100; num++) {
    numArray.push("image-" + num + ".jpg")
}
console.log(numArray)