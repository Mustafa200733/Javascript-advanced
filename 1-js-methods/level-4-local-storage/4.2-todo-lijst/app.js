console.log('🚀 Opdracht 4.2: Todo Lijst');

let taken = []; // Array van strings

function voegTaakToe() {
    const input = document.getElementById('nieuwe-taak');
    const taakTekst = input.value.trim(); // haal waarde op en trim
    
    if (taakTekst === '') {
        alert('Voer een taak in!');
        return;
    }
    
    // Voeg taak toe aan array
    taken.push(taakTekst);
    
    // Sla taken op in localStorage
    localStorage.setItem('mijnTaken', JSON.stringify(taken));
    
    // Maak input leeg en update UI
    input.value = '';
    toonTaken();
}

function laadTaken() {
    // Haal taken op uit localStorage
    const opgeslagenTaken = localStorage.getItem('mijnTaken');
    
    if (opgeslagenTaken) {
        // Parse JSON naar array
        taken = JSON.parse(opgeslagenTaken);
    }
}

function toonTaken() {
    const container = document.getElementById('taken-lijst');
    
    if (taken.length === 0) {
        container.innerHTML = '<p>Geen taken toegevoegd.</p>';
        document.getElementById('aantal-taken').textContent = '0';
        return;
    }
    
    // Genereer HTML voor alle taken
    const takenHTML = taken.map((taak, index) => `
        <div class="taak">
            ${taak}
            <button onclick="verwijderTaak(${index})">🗑️</button>
        </div>
    `).join('');
    
    container.innerHTML = takenHTML;
    
    // Update teller
    document.getElementById('aantal-taken').textContent = taken.length;
}

function verwijderTaak(index) {
    // Verwijder taak op specifieke index
    taken.splice(index, 1);
    
    // Sla taken op en update UI
    localStorage.setItem('mijnTaken', JSON.stringify(taken));
    toonTaken();
}

function wisAlleTaken() {
    if (confirm('Weet je zeker dat je alle taken wilt wissen?')) {
        // Maak array leeg
        taken = [];
        
        // Verwijder uit localStorage
        localStorage.removeItem('mijnTaken');
        
        toonTaken();
    }
}

// Initialisatie bij pagina laden
document.addEventListener('DOMContentLoaded', () => {
    laadTaken();
    toonTaken();
});
