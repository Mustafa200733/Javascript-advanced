fetch('https://fortnite-api.com/v2/cosmetics/new')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cosmetics');
    container.classList.add('cosmetics-container');
    if (data.data && data.data.items && Array.isArray(data.data.items.br)) {
      if (data.data.items.br.length === 0) {
        container.innerHTML = "<p>Geen nieuwe cosmetics gevonden.</p>";
      } else {
        for (let cosmetic of data.data.items.br) {
          const div = document.createElement('div');
          div.classList.add('cosmetic-card'); 

          div.innerHTML = `
            <h3>${cosmetic.name}</h3>
            <p>Type: ${cosmetic.type.displayValue}</p>
            <img src="${cosmetic.images.icon}" alt="${cosmetic.name}" width="100">
          `;
          container.appendChild(div);
        }
      }
    } else {
      container.innerHTML = "<p>Geen nieuwe cosmetics gevonden.</p>";
    }
  })
  .catch(error => {
    console.log('Fout:', error);
    const container = document.getElementById('cosmetics');
    container.innerHTML = '<p>Sorry, de cosmetics konden niet geladen worden.</p>';
  });
