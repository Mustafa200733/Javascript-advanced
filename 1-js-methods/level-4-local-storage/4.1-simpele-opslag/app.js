console.log('🚀 Opdracht 4.1: Simpele Opslag');

function slaOpNaam() {
    console.log('slaOpNaam() aangeroepen');
    
    // 1. Haal naam uit input veld
    const naam = document.getElementById('naam-input').value;
    
    // 2. Check of naam niet leeg is
    if (naam.trim() === '') {
        alert('Voer eerst een naam in!');
        return;
    }
    
    // 3. Sla naam op in localStorage
    localStorage.setItem('gebruikersnaam', naam);
    
    // 4. Toon welkomstbericht
    toonWelkom();
    
    // 5. Maak input leeg
    document.getElementById('naam-input').value = '';
}

function toonWelkom() {
    // 1. Haal naam op uit localStorage
    const opgeslagenNaam = localStorage.getItem('gebruikersnaam');
    
    const welkomElement = document.getElementById('welkom-bericht');
    
    // 2. Toon juiste bericht
    if (opgeslagenNaam && opgeslagenNaam.trim() !== '') {
        welkomElement.textContent = `Welkom ${opgeslagenNaam}!`;
    } else {
        welkomElement.textContent = 'Geen naam opgeslagen.';
    }
}

function wisNaam() {
    // Verwijder naam uit localStorage
    localStorage.removeItem('gebruikersnaam');
    
    toonWelkom();
}

// Roep toonWelkom() aan bij pagina laden
document.addEventListener('DOMContentLoaded', toonWelkom);
