const date = new Date();
date.setDate(date.getDate() + 1);
date.setHours(16, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  const difference = date - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

updateCountdown();
setInterval(updateCountdown, 1000);

const answers = {
  like: {
    emoji: "🥺💗",
    title: "Do You Like Me?",
    text: "I hope your answer is yes... because I've been smiling way too much whenever I think about you.",
  },
  baby: {
    emoji: "🙈💕",
    title: "Can I Call You Baby?",
    text: "Only if you're comfortable with it. If you say yes, don't blame me if I accidentally say it too much. 😭",
  },
  date: {
    emoji: "🎀",
    title: "Are You Excited?",
    text: "I definitely am. Tomorrow feels special to me because I get to spend it with you.",
  },
  hug: {
    emoji: "🤍",
    title: "Can I Have a Hug?",
    text: "A simple yes would probably make my entire day. But only if you're comfortable, okay? ♡",
  },
  picture: {
    emoji: "📸",
    title: "Picture Together?",
    text: "I want at least one picture from tomorrow that we can look back at someday and say, 'That was our first date.'",
  },
  again: {
    emoji: "🌷",
    title: "Can We Do This Again?",
    text: "I really hope tomorrow isn't our only date. I'd love to make more little memories with you.",
  },
};

function answer(type) {
  const item = answers[type];

  document.getElementById("popupEmoji").textContent = item.emoji;
  document.getElementById("popupTitle").textContent = item.title;
  document.getElementById("popupText").textContent = item.text;

  document.getElementById("popup").classList.add("show");

  document.getElementById("answerEmoji").textContent = item.emoji;
  document.getElementById("answerText").textContent = item.text;
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

function showFinal() {
  const message = document.getElementById("finalMessage");

  message.classList.toggle("show");

  if (message.classList.contains("show")) {
    setTimeout(() => {
      message.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  }
}

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "❚❚";
  } else {
    music.pause();
    musicBtn.textContent = "♪";
  }
});

document.addEventListener(
  "click",
  function () {
    if (music.paused) {
      music
        .play()
        .then(() => {
          musicBtn.textContent = "❚❚";
        })
        .catch(() => {});
    }
  },
  { once: true },
);

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});
