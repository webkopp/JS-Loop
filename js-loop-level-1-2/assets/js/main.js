// - Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// - Wenn du mit Arrays arbeitest, musst du das Array initialisieren (let numArray = \[\];)"
// - Verwende den Befehl "push()" im Schleifenkörper.
// - Gib zum Schluss die Variable numArray in der Konsole aus.

// # ☝🏼 Hinweis
// - [for-Schleife](https://www.w3schools.com/js/js%5Floop%5Ffor.asp)

// let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numArray.length; i++) {
//     console.log(numArray[i])
// }

let numArray = []

for (let num = 0; num <= 10; num++) {
    numArray.push(num)
}
console.log(numArray)