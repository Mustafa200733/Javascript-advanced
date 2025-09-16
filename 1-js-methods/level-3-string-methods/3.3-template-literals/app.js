// ===============================
// Opdracht 3.3: Template Literals
// ===============================
console.log('🚀 Opdracht 3.3: Template Literals');

const namen = ['Jan', 'Marie', 'Piet', 'Lisa'];
const leeftijden = [25, 30, 22, 28];
const steden = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'];

console.log('Namen:', namen);
console.log('Leeftijden:', leeftijden);
console.log('Steden:', steden);

// Beschrijvingen maken met template literals en map()
const beschrijvingen = namen.map((naam, index) => 
    `${naam} (${leeftijden[index]} jaar) woont in ${steden[index]}.`
);

console.log('Beschrijvingen:', beschrijvingen);
console.log('Verwacht: ["Jan (25 jaar) woont in Amsterdam.", "Marie (30 jaar) woont in Rotterdam.", "Piet (22 jaar) woont in Utrecht.", "Lisa (28 jaar) woont in Den Haag."]');


