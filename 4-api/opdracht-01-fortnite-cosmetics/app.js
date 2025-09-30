console.log('App.js is loaded');
let output = document.querySelector('.cosmetics');
let out = '';
fetch('fortnite.json')
  .then(response => response.json())
  .then(data => {
    const cosmeticsSection = document.querySelector('.cosmetics');
    const title = document.getElementById('cosmetics-title');
    title.textContent = `${data.length} Fortnite Cosmetics`;

    function renderCosmetics(list) {
      cosmeticsSection.innerHTML = '';
      list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cosmetic';
        div.innerHTML = `

          <img src="${item.image}" alt="${item.name}">    
          <div class="cosmetic-info">
              
            <div class="name">${item.name}</div>
            <div class="type">Type
            : ${item.type}</div>
            <div class="rarity">Rarity: ${item.rarity}</div>
            <div class="cost">Cost: ${item.cost} V-Bucks</div>
          </div>
        `;
        cosmeticsSection.appendChild(div);
      });
    }

    renderCosmetics(data);
    document.getElementById('clear-btn').addEventListener('click', () => {
      cosmeticsSection.innerHTML = '';
      title.textContent = '0 Fortnite Cosmetics';
    });
  })
  .catch(error => console.log('error', error));

fetch('j.json')
  .then(response => response.json())
  .then(data => {
    // Haal alle BR items op
    const items = data.data.items.br;
    // Filter alleen items met een geldige naam en smallIcon
    const filtered = items.filter(item =>
      item.name && item.name !== "null" &&
      item.images && item.images.smallIcon
    );
    // Selecteer de grid container
    const grid = document.getElementById('cosmetics-grid');
    // Voeg elke item toe aan het grid
    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'cosmetic-card';
      card.innerHTML = `
        <img src="${item.images.smallIcon}" alt="${item.name}">
        <h2>${item.name}</h2>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Fout bij het laden van de API:', error);
  });



