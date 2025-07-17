const cat = document.getElementById('cat');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveCat() {
  const maxX = window.innerWidth - cat.clientWidth;
  const maxY = window.innerHeight - cat.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  cat.style.left = randomX + 'px';
  cat.style.top = randomY + 'px';
}

cat.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = 'Score: ' + score;
  moveCat();
});

setInterval(moveCat, 1000);
moveCat();
