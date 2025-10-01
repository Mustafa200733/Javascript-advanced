fetch('https://fortnite-api.com/v2/cosmetics/new')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cosmetics');

    // Zet de container in flexbox
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.gap = '20px';

    if (data.data && data.data.items && Array.isArray(data.data.items.br)) {
      if (data.data.items.br.length === 0) {
        container.innerHTML = "<p>Geen nieuwe cosmetics gevonden.</p>";
      } else {
        for (let cosmetic of data.data.items.br) {
          const div = document.createElement('div');
          div.style.border = '1px solid #ccc';
          div.style.padding = '10px';
          div.style.borderRadius = '8px';
          div.style.width = '200px';
          div.style.textAlign = 'center';
          div.style.background = '#f9f9f9';

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
