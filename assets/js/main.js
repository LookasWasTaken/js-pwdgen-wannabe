// Chiedi all'utente il suo nome
const nome = prompt("Qual è il tuo nome?");

// poi chiedi il suo cognome
const cognome = prompt("Qual è il tuo cognome?");

// poi chiedi il suo colore preferito
const colorePreferito = prompt("Qual è il tuo colore preferito?");

// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const password = nome + cognome + colorePreferito + "23";

document.write("Generator: " + password);

console.log(password);