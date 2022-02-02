'use strict';


// let animal = [
//   'Zi Rat',
//   'Chou Cow',
//   'Yin Tiger',
//   'Mao Rabit',
//   'Chen Dragon',
//   'Yi Snake',
//   'Wu Horse',
//   'Wei Sheep',
//   'Shen Monkey',
//   'You Rooster',
//   'Xu Dog',
//   'Hai Boar',
// ];
// 🐀 Rat
// 🐂 Ox
// 🐅 Tiger
// 🐇 Rabbit
// 🐉 Dragon
// 🐍 Snake
// 🐎 Horse
// 🐑 Sheep
// 🐒 Monkey
// 🐓 Rooster
// 🐕 Dog
// 🐖 Pig

document.querySelector('.check').addEventListener('click', function () {
  const years = Number(document.querySelector('.year').value);
  let animalYear = years % 12;
  let curYear = new Date().getFullYear();
  let curAge = curYear-years;
  document.querySelector('.currentage').textContent = curAge;

  let  updateCase = (str1,str2) =>
  (document.querySelector('.zodiac').textContent = str1,
  document.querySelector('.animal').textContent = str2)
  document.body.style.backgroundColor = "#EE4B2B";

  switch (animalYear) {
    case 4:
      updateCase('Zi Rat','🐀');
      break;
    case 5:
      updateCase('Chou Cow','🐂');
      break;
    case 6:
      updateCase('Yin Tiger','🐅');
      break;
    case 7:
      updateCase('Mao Rabit','🐇');
      break;
    case 8:
      updateCase('Chen Dragon','🐉');
      break;
    case 9:
      updateCase('Yi Snake','🐍');
      break;
    case 10:
      updateCase('Wu Horse','🐎');
      break;
    case 11:
      updateCase('Wei Sheep','🐑');
      break;
    case 0:
      updateCase('Shen Monkey','🐒');
      break;
    case 1:
      updateCase('You Rooster','🐓');
      break;
    case 2:
      updateCase('Xu Dog','🐕');
      break;
    case 3:
      updateCase('Hai Boar','🐖');
      break;
    default:
      updateCase('?','?');
  }
});



  document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.year').value = '';
  document.querySelector('.zodiac').textContent = '?';
  document.querySelector('.animal').textContent = '?';
  document.querySelector('.currentage').textContent = '?';
  document.body.style.backgroundColor = "#296"
  
});
