const getallen = [12, 45, 67, 23, 89, 34];
console.log('Getallen array:', getallen);

// TODO: Zoek het eerste getal groter dan 50
const gevondenGetal = eersteGroteGetal = getallen.find(getal => getal > 50);

console.log('Eerste getal > 50:', gevondenGetal);

// TODO: Zoek de index van het eerste getal groter dan 50
const gevondenIndex = indexEersteGroteGetal = getallen.findIndex(getal => getal > 50);

console.log('Index van eerste getal > 50:', gevondenIndex);