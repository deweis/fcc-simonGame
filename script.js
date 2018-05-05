/*jshint esversion: 6 */
const colors = ['#FFC261', '#71E878', '#5460FF', '#E87B69'];

for (let i = 0; i < 4; i++) {
  document.getElementById(`pad${i}`).style.backgroundColor = colors[i];
  document.getElementById(`pad${i}`).addEventListener('click', playSound);
}

function playSound() {
  const origin = 'https://s3.amazonaws.com/freecodecamp/';
  const audio = new Audio(`${origin}simonSound${Number(this.id[3]) + 1}.mp3`);
  audio.load();
  audio.play();
}
