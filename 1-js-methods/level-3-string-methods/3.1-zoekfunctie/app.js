// Opdracht 3.1: Zoekfunctie
console.log('🚀 Opdracht 3.1: Zoekfunctie');

const films = ['The Matrix', 'avatar', 'INCEPTION', 'Titanic'];
console.log('Alle films:', films);

function zoekFilms(films, zoekterm) {
    return films.filter(film =>
        film.toLowerCase().startsWith(zoekterm.toLowerCase())
    );
}

// Test de functie
console.log('Zoek "the":', zoekFilms(films, 'the'));
console.log('Zoek "a":', zoekFilms(films, 'a'));
console.log('Verwacht voor "the": ["The Matrix"]');