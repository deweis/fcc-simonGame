/*jshint esversion: 6 */
const colors = ['#FFC261', '#71E878', '#5460FF', '#E87B69'];
let track = [];
let userPlay = [];

/* Set colors on initial load */
for (let i = 0; i < 4; i++) {
  document.getElementById(`pad${i}`).style.backgroundColor = colors[i];
  document.getElementById(`pad${i}`).addEventListener('click', playSound);
}

document.getElementById('btn-start').addEventListener('click', startGame);

/* Start the game */
function startGame() {
  document.getElementById('counter').innerText = track.length;
  track.push(Math.floor(Math.random() * (3 - 0 + 1)) + 0);
  playSong(track);
}

/* Play sound when user clicks  */
function playSound() {
  const id = this.id;
  userPlay.push(Number(id[3]));
  checkUser();
  document.getElementById(id).style.backgroundColor = '#fff';
  const origin = 'https://s3.amazonaws.com/freecodecamp/';
  const audio = new Audio(`${origin}simonSound${Number(id[3]) + 1}.mp3`);
  audio.play();
  setBG(id);
}

/* check users click */
function checkUser() {
  const item = userPlay.length - 1;
  if (track[item] === userPlay[item]) {
    document.getElementById('title').innerText = 'fCC Simon Game';
    if (track.length === userPlay.length) {
      document.getElementById('title').innerText = 'yieyiiihh';
      setTimeout(function () {
        startGame();
        document.getElementById('title').innerText = 'fCC Simon Game';
      }, 1000
      );
    }
  } else {
    document.getElementById('title').innerText = 'wrong';
    setTimeout(function () {
      playSong(track);
      document.getElementById('title').innerText = 'fCC Simon Game';
    }, 1000
    );
  }
}

/* change BG color */
function setBG(cell) {
  setTimeout(function () {
    document.getElementById(cell).style.backgroundColor = colors[cell[3]];
  }, 200);
}

/* Play sound generated by the algo */
function playSong(arr) {
  const origin = 'https://s3.amazonaws.com/freecodecamp/';
  const run = setInterval(play, 700);
  let id = 0;

  function play() {
    if (id === arr.length) {
      clearInterval(run);
    } else {
      document.getElementById(`pad${arr[id]}`).style.backgroundColor = '#fff';
      const audio = new Audio(`${origin}simonSound${arr[id] + 1}.mp3`);
      audio.play();
      setBG(`pad${arr[id]}`);
      id++;
    }
  }

  userPlay = [];
}
