// - Lernziel: while-Schleife verstehen und anwenden.
// - Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// - Initialisiere dazu eine Variable counter mit dem Wert 0.
// - Als Bedingung nutze in der Schleife "counter < 10".
// - Gib den String "Hallo World + counter" in der Konsole aus.
// - Erhöhe counter um eins und speichere ihn als counter.

// # ☝🏼 Hinweis
// - Unterschied zwischen der [for-Schleife](https://www.w3schools.com/JS/js%5Floop%5Ffor.asp) und der [while-Schleife](https://www.w3schools.com/JS/js%5Floop%5Fwhile.asp).

// while (i < 11) {
//     text += "Hello World " + i
//     i++
//   }

let counter = 0
while (counter < 10) {
    counter++
    console.log("Hello World " + counter)
}