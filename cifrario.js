//funzione per crittografare
function cifrario() {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz"; //alfabeto
    var testoinchiaro = document.getElementById("chiaro").value;//prende il vaore da input
    testoinchiaro = testoinchiaro.replaceAll(" ", ""); //rimuove gli spazi
    var testocifrato = "";
    var testodecifrato = "";
    var chiavi = document.getElementById("chiavi").value;//prende da input le chiavi
    const array = chiavi.split(";");
    var ic = 0; // chiave = 0

    for (var i = 0; i < testoinchiaro.length; i++) {
        var posizione = alfabeto.indexOf(testoinchiaro[i]);
        testocifrato += alfabeto[(posizione + parseInt(array[ic])) % 26];
        ic = (ic + 1) % array.length;
    }
    document.getElementById("testocifrato").innerHTML = testocifrato;//testo cifrato

    ic = 0;

    for (var i = 0; i < testocifrato.length; i++) {
        var posizione = alfabeto.indexOf(testocifrato[i]);
        testodecifrato += alfabeto[(posizione - parseInt(array[ic]) + 26) % 26];
        console.log((posizione - parseInt(array[ic]) + 26) % 26);
        ic = (ic + 1) % array.length;

    }
    document.getElementById("testochiaro").innerHTML = testodecifrato;//testo in chiaro
}