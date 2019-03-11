let counter = 0
// let resetCounter = 0
// let team1score = 0
// let team2score = 0
// let myNameTeam1 = ''
// let myNameTeam2 = ''

const main = () => {
  document.querySelector('p.team1score').textContent = 0
  document.querySelector('p.team2score').textContent = 0
}

const addMyNameTeam1 = () => {
  document.querySelector('h2.myteamname1').textContent = document.querySelector(
    '.myNameTeam1Txt'
  ).value
}

const addMyNameTeam2 = () => {
  document.querySelector('h2.myteamname2').textContent = document.querySelector(
    '.myNameTeam2Txt'
  ).value
}

const addMyScoreTeam1 = () => {
  counter++
  document.querySelector('p.team1score').textContent = counter
  if (counter === 21) {
    document.querySelector('p.team1score').textContent = 'You Won!'
    document.querySelector('p.team2score').textContent = 'You Lost!'
    const btn = document.querySelector('.team-1-add-1-button')
    btn.disabled = true
  }
}
const addMyScoreTeam2 = () => {
  counter++
  document.querySelector('p.team2score').textContent = counter
  if (counter === 21) {
    document.querySelector('p.team2score').textContent = 'You Won!'
    document.querySelector('p.team1score').textContent = 'You Lost!'
    const btn = document.querySelector('.team-2-add-2-button')
    btn.disabled = true
  }
}

const subtractMyScoreTeam1 = () => {
  counter--
  document.querySelector('p.team1score').textContent = counter
  if (counter === 0) {
    document.querySelector('p.team1score').textContent = 'You lost!'
    const btn = document.querySelector('.team-1-subtract-1-button')
    btn.disabled = true
  }
}

const subtractMyScoreTeam2 = () => {
  counter--
  document.querySelector('p.team2score').textContent = counter
  if (counter < 0) {
    document.querySelector('p.team2score').textContent = 'You lost!'
    const btn = document.querySelector('.team-2-subtract-2-button')
    btn.disabled = true
  }
}
const resetMyScoreTeam1 = () => {
  document.querySelector('p.team1score').textContent = 0
  const btn = document.querySelector('.team-1-add-1-button')
  btn.disabled = false
  const btn1 = document.querySelector('.team-1-subtract-1-button')
  btn1.disabled = false
}
const resetMyScoreTeam2 = () => {
  document.querySelector('p.team2score').textContent = 0
  const btn = document.querySelector('.team-2-add-2-button')
  btn.disabled = false
  const btn1 = document.querySelector('.team-2-subtract-2-button')
  btn1.disabled = false
}

document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.update-team-name1')
  .addEventListener('click', addMyNameTeam1)

document
  .querySelector('.update-team-name2')
  .addEventListener('click', addMyNameTeam2)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addMyScoreTeam1)

document
  .querySelector('.team-2-add-2-button')
  .addEventListener('click', addMyScoreTeam2)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractMyScoreTeam1)

document
  .querySelector('.team-2-subtract-2-button')
  .addEventListener('click', subtractMyScoreTeam2)

document
  .querySelector('.team-1-reset-button')
  .addEventListener('click', resetMyScoreTeam1)

document
  .querySelector('.team-2-reset-button')
  .addEventListener('click', resetMyScoreTeam2)