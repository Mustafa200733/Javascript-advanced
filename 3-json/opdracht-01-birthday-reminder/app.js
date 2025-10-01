let output = document.querySelector('.birthdays');
let out = '';

fetch('birthday.json')
    .then(response => response.json())
    .then(data => {
        const birthdaysSection = document.querySelector('.birthdays');
        const title = document.getElementById('birthday-title');
        title.textContent = `${data.length} Birthdays Today`;

        function renderBirthdays(list) {
            birthdaysSection.innerHTML = '';
            list.forEach(person => {
                const div = document.createElement('div');
                div.className = 'birthday';
                div.innerHTML = `
          <img src="${person.picture}" alt="${person.name}">
          <div class="birthday-info">
            <div class="name">${person.name}</div>
            <div class="age">${person.age} years</div>
          </div>
        `;
                birthdaysSection.appendChild(div);
            });
        }

        renderBirthdays(data);

        document.getElementById('clear-btn').addEventListener('click', () => {
            birthdaysSection.innerHTML = '';
            title.textContent = '0 Birthdays Today';
        });
    })
    .cartch(error => console.log('error', error));
