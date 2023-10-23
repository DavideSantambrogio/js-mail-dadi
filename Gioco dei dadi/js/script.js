
// inizio processo
document.getElementById("lancio").onclick = function() {

    // messaggio iniziale
    document.getElementById("start").style.display = "none";
    
    // genera numeri
    let playerNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("my-number").innerHTML = playerNumber;

    let computerNumber = Math.floor(Math.random() * 6) + 1;

    document.getElementById("computer-number").innerHTML = computerNumber;

    console.log (playerNumber, computerNumber)

    console.log (`Il tuo numero è ${playerNumber}` )
    console.log (`Il numero del computer è ${computerNumber}` )

    // condizioni di vittoria

    if (playerNumber > computerNumber) {
        var element = document.getElementById("message");
        element.classList.add("firework");
        // console.log ("HAI VINTO !!!")
        result = ("HAI VINTO")
    }

    else if (playerNumber < computerNumber) {
        console.log ("HAI PERSO  !!!")
        result = ("HAI PERSO")
    }

    else if (playerNumber = computerNumber) {        
        console.log ("PAREGGIO !!!")
        result = ("PAREGGIO")
    }

    // risultato
    document.getElementById("message").style.display = "flex";
    
    document.getElementById("result").innerHTML = result;


}