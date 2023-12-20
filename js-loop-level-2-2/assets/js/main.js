// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingebenen Anzahl aus dem Input-Feld.

// # ☝🏼 Hinweis
// - Du hast hier mehrere Möglichkeiten zum Lösen der Aufgabe.
// - Von Array-Methoden, ohne Variablen, über String-Methoden etc. kannst du hier alles benutzen.
// - Beachte, dass du hier einen Loop verwenden sollst.

const loopMe = () => {
    const numLoop = document.getElementById("numLoop").value
    word = ""
    if (numLoop == 0){
        document.getElementById("outLoop").innerHTML = "So geht das nicht! Zahl muss größer als 0 sein."
    } else {
        for (i = 1; i <= numLoop ; i++){
            word += "o"
        }
        document.getElementById("outLoop").innerHTML = "L" + word + "p"
    }
}