// genera numeri
let playerNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;

console.log (playerNumber, computerNumber)

alert (`Il tuo numero è ${playerNumber}` )
alert (`Il numero del computer è ${computerNumber}` )

// condizioni di vittoria

if (playerNumber > computerNumber) {
    alert ("HAI VINTO !!!")
}

else if (playerNumber < computerNumber) {
    alert ("HAI PERSO  !!!")
}

else if (playerNumber = computerNumber) {
    alert ("PAREGGIO !!!")
}

alert ("Clicca OK per riprovare")
location.reload()