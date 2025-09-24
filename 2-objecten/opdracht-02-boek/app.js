// Maak een boek object waar je allemaal gegevens van een boek in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:

//     Titel: de titel van het boek (string)
//     Auteur: de auteur van het boek (string)
//     Uitgeverij: de uitgeverij van het boek (string)
//     Jaar: het jaar van publicatie van het boek (number)
//     Verkocht: aantal verkochten exemplaren (number)
//     Prijs: prijs van het boek (string)

// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor maak je in je HTML een div-tag aan met de class 'output'.

// In de theorie staat uitgelegd hoe je dit mopoet doen.

// Let : in de code conventions staat dat je de code in het Engels moet schrijven!



// Boek-object
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publisher: "Charles Scribner's Sons",
  year: 1925,
  sold: 25000000,
  price: "$10.99"
};

// Selecteer de output-div
const output = document.querySelector(".output");

// Vul de output-div met de gegevens
output.innerHTML = `
  <p>Title: ${book.title}</p>
  <p>Author: ${book.author}</p>
  <p>Publisher: ${book.publisher}</p>
  <p>Year: ${book.year}</p>
  <p>Sold: ${book.sold}</p>
  <p>Price: ${book.price}</p>
`
