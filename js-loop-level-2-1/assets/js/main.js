// - Lernziel: Anwendung for-Schleife und Conditional Statements.
// - Nehmen wir an, wir haben 100 Bilder in unserem Ordner. Wir wollen ein Array von Bildern erstellen und die Dateinamen standardisieren, so wie in der Ergebnisvorschau.
// - Deklariere dafür die Function imageArray.
// - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Nutze push() und Conditionals Statements (if, else if, else).
// - Lasse dir returnArray so wie in der Ergebnisvorschau von image\_001.jpg bis image\_100.jpg in der Konsole ausgeben.

let imageArray = () => {
    let returnArray = []
    for (i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push("image-00" + i + ".jpg")
        } else if (i < 100) {
            returnArray.push("image-0" + i + ".jpg")
        } else {
            returnArray.push("image-" + i + ".jpg")
        }
    }
    console.log(returnArray)
}
console.log(imageArray())

// let numArray = []

// for (num = 1; num <= 100; num++) {
//     numArray.push("image-" + num + ".jpg")
// }
// console.log(numArray)