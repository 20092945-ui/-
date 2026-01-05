const phrases = [
  "Te amo",
  "Tus fotos me enamoran",
  "Tus ojos son mi vicio",
  "Tu mirada dice todo",
  "Tienes una vibra hermosa",
  "Eres arte sin intentarlo",
  "No pasas desapercibida"
];

const finalPhrase = "te quiere ya sabes quién 💙";

const heart = document.getElementById("heart");
let activeWord = false;
let index = 0;

heart.addEventListener("click", () => {
  if (activeWord) return;
  activeWord = true;

  const word = document.createElement("div");
  word.className = "word";

  let text;
  if (index < phrases.length) {
    text = phrases[index];
    index++;
  } else {
    text = finalPhrase;
  }

  word.innerHTML = `
    <span class="mini-heart left">💗</span>
    ${text}
    <span class="mini-heart right">💗</span>
  `;

  const rect = heart.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const radius = 190;
  const angle = Math.random() * Math.PI * 2;

  word.style.left = centerX + Math.cos(angle) * radius + "px";
  word.style.top = centerY + Math.sin(angle) * radius + "px";
  word.style.transform = "translate(-50%, -50%)";

  document.body.appendChild(word);

  setTimeout(() => {
    word.remove();
    activeWord = false;
  }, 4000);
});
