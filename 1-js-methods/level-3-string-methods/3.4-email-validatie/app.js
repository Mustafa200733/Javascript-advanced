// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // Stap 1: trim en lowercase
    const schoonEmail = email.trim().toLowerCase();
    
    // Stap 2: check of @ aanwezig
    if (!schoonEmail.includes('@')) return false;
    
    // Stap 3: check geen spaties
    if (schoonEmail.includes(' ')) return false;
    
    // Stap 4: check geldig einde
    const geldigeEindes = ['.com', '.nl', '.org'];
    return geldigeEindes.some(einde => schoonEmail.endsWith(einde));
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});
