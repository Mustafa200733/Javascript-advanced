const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];

// Toon alle studenten in de lijst
function toonAlleStudenten() {
  const lijst = document.getElementById('studenten-lijst');
  lijst.innerHTML = students
    .map(student => {
      return `
      <article class="${student.actief ? 'actief' : 'inactief'}">
        <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
        📚 ${student.studie}<br>
        📊 Cijfer: ${student.cijfer} | Status: ${student.actief ? '✅ Actief' : '❌ Inactief'
        }
      </article>
    `;
    })
    .join('');
}

function toonActieveStudenten() {
  const lijst = document.getElementById('studenten-lijst');
  lijst.innerHTML = students
    .filter(student => student.actief)
    .map(student => {
      return `
        <article class="actief">
          <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
          📚 ${student.studie}<br>
          📊 Cijfer: ${student.cijfer} | Status: ✅ Actief
        </article>
      `;
    })
    .join('');
}

function toonTopStudenten() {
  const lijst = document.getElementById('studenten-lijst');
  lijst.innerHTML = students
    .filter(student => student.cijfer >= 8.0)
    .map(student => {
      return `
        <article class="${student.actief ? 'actief' : 'inactief'}">
          <strong>${student.naam}</strong> (${student.leeftijd} jaar)<br>
          📚 ${student.studie}<br>
          📊 Cijfer: ${student.cijfer} | Status: ${student.actief ? '✅ Actief' : '❌ Inactief'
        }
        </article>
      `;
    })
    .join('');
}

// 🚀 START DE APPLICATIE - roep deze aan als de pagina laadt
toonAlleStudenten();
