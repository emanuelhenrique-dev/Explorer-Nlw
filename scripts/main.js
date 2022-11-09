// delay inicial da transicao
let delay = 0;
// criar um card
function createCard(date, day, games) {
  delay = delay + 0.5;
  console.log(delay + 's');
  return `
  <div class="card" style=" animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

//Responsavel por criar cada jogo
function createGame(team1, team2, hour) {
  return `
    <li>
      <img src="./assets/Flags/${team1}.svg" alt="${team1}" />
      <strong>${hour}</strong>
      <img src="./assets/Flags/${team2}.svg" alt="${team2}" />
    </li>
  `;
}

//mostra na tela os cards
document.querySelector('#cards').innerHTML =
  createCard(
    '24/11',
    'quinta',
    createGame('Switzerland', 'Cameroon', '07:00') +
      createGame('Portugal', 'Ghana', '13:00') +
      createGame('Brazil', 'Serbia', '16:00')
  ) +
  createCard(
    '28/11',
    'segunda',
    createGame('South_korean', 'Ghana', '10:00') +
      createGame('Brazil', 'Switzerland', '13:00') +
      createGame('Portugal', 'Uruguay', '16:00')
  );

// Colors Selection

const colors = document.querySelectorAll('.colors div');
const theme = document.querySelector('body');

colors.forEach((color) => {
  color.addEventListener('click', (e) => {
    const color = e.target.className;
    //console.log(color);
    if (color !== theme.className) {
      theme.className = color;
    }
  });
});
