const character = document.querySelector('.character');
const randomBtn = document.querySelector('.randomBtn');
const characterName = document.querySelector('h1');
const occupations = document.querySelector('.occupations');
const characterImg = document.querySelector('.character-img');
const characterStatus = document.querySelector('.status');

randomBtn.addEventListener('click', () => {
  fetch('https://www.breakingbadapi.com/api/character/random')
    .then((res) => res.json())
    .then((data) => {
      renderCharacter(data[0]);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
});

const renderCharacter = (character) => {
  characterName.textContent = `${character.name} aka ${character.nickname}`;
  occupations.textContent = character.occupation.join(',');
  characterImg.src = character.img;
  characterImg.style.border = '15px solid #c1b826';
  characterStatus.textContent = character.status;
};
