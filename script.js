const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const question = document.getElementById("question");
const heartsContainer = document.querySelector(".hearts");

let scale = 1;
let noClicks = 0;

const messages = [
  "Are you REALLY sure? 😐",
  "Think again 🫣",
  "Please reconsider 🥺",
  "Don't break my heart 💔",
  "This is getting awkward 😭",
  "You literally have no choice 😌"
];

// YES button
yesBtn.addEventListener("click", () => {
  question.textContent = "YAYYYYY ANGIE 💕💘";
  response.textContent = "I knew you'd say yes, Angie 🥰 Happy Valentine’s Day 💖";
  confetti();
});

// ARE YOU SURE button
noBtn.addEventListener("click", () => {
  noClicks++;

  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  if (noClicks < messages.length) {
    noBtn.textContent = messages[noClicks];
  }

  document.body.classList.add("shake");
  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 400);
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// Confetti
function confetti() {
  for (let i = 0; i < 60; i++) {
    const conf = document.createElement("span");
    conf.textContent = "🎉";
    conf.style.position = "absolute";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = Math.random() * 100 + "vh";
    conf.style.fontSize = "20px";
    document.body.appendChild(conf);

    setTimeout(() => {
      conf.remove();
    }, 2000);
  }
}
