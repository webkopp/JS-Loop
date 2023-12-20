// - Schreibe eine [for-Schleife](https://www.w3schools.com/JS/js%5Floop%5Ffor.asp), die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// - Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

let text = [""]

for (let i = 1; i < 11; i++) {
    text += "Hello World " + i + "<br>"
}

console.log(text)