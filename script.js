document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bgMusic");

  // NO button runs
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Falling hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(createHeart, 350);

  // Music on first click
  const startMusic = () => {
    music.volume = 0.4;
    music.play().catch(()=>{});
    document.removeEventListener("click", startMusic);
  };
  document.addEventListener("click", startMusic);
});

// YES button
function sayYes() {
  const music = document.getElementById("bgMusic");

  // Restart music with more impact
  music.currentTime = 0;
  music.volume = 0.7;
  music.play().catch(() => {});

  confetti({
    particleCount: 250,
    spread: 90,
    origin: { y: 0.6 }
  });

  const card = document.querySelector(".card");
  card.innerHTML = `
    <div style="
      text-align:center;
      color:#d6336c;
      padding:2.5rem;
      animation: fadeIn 1.5s ease-in-out;
      max-height: 90vh;
      overflow-y: auto;
    ">
      <h1 style="font-size:2.2rem;">Scarlet 💜</h1>

      <p style="font-size:1.1rem;margin-top:1rem;">
        Thank you God for bringing you into my life & Thank you for saying yes.
      </p>

      <p style="margin-top:1rem;">
        I'm grateful to God that you came into my life.
        Despite all the challenges and distances,
        you still chose to meet me halfway.
      </p>

      <p style="margin-top:1rem;">
        Even though we're miles apart right now,<br>
        I want you to know that every single day,
        you're the one I choose. Every. Single. Day.
      </p>

      <p style="margin-top:1rem;">
        You're the reason I believe in tomorrow.
        No matter how far apart we are,<br>
        you feel so close to my heart.
      </p>

      <p style="margin-top:1rem;">
        I'm still falling for you, seriously,<br>
        but my intentions are genuine and clear —<br>
        it's you. Only you.
      </p>

      <p style="margin-top:1rem;">
        Every time I think about the future,<br>
        I see you there with me.
        I know this is just the beginning for us,<br>
        and I'm excited for the journey we'll share together.
      </p>

      <p style="margin-top:1rem;">
        I'm still falling for you, and I want to court you properly.
        I don't know what the future holds, but I know I want to find out with you.
        Take your time, and when you're ready to tell me what you feel, I'll be here listening. 💜
      </p>

      <p style="margin-top:1.5rem;font-weight:600;font-size:1.1rem;">
        Happy Valentine's, Scarlet 🌹<br>
        You are my person. 💖
      </p>

      <p style="margin-top:1rem;font-size:0.9rem;color:#999;">
        Loving you forever, from here to eternity ∞
      </p>
    </div>
  `;
}



