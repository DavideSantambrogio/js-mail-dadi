const registeredEmail = [
    "pizzalover@example.com",
    "sunnybeach@example.com",
    "fashionista@example.com",
    "musiclover@example.com",
    "bookworm@example.com",
    "travelbug@example.com",
    "gamer@example.com",
    "animallover@example.com",
    "fitnessfanatic@example.com",
    "techgeek@example.com"]

const userEmail = prompt("Ciao utente, inserisci la tua email per verificare che tu sia registrato al sito")

console.log(userEmail)

let found = false;

for (let i = 0; i < registeredEmail.length; i++) {
    const currentEmail = registeredEmail [i];

    if(currentEmail === userEmail) { 
        found = true;
    }
    console.log(currentEmail, userEmail, found);

}

if (found === true) {
    alert("Email già presente ACCEDI")}
    else {
        alert("Email non presente REGISTRATI")}