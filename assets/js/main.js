// Chiedi all'utente il suo nome
let nome = prompt("Qual è il tuo nome?");

// poi chiedi il suo cognome
let cognome = prompt("Qual è il tuo cognome?");

// poi chiedi il suo colore preferito
let colorePreferito = prompt("Qual è il tuo colore preferito?");

// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
let password = nome + cognome + colorePreferito + "23";

document.write("Generator: " + password);

console.log(password);