document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");
  const slideshow = document.getElementById("slideshow");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const messageArea = document.getElementById("messageArea");

  const messages = [
    "minnoşum beni affet... 🙏",
    "Gerçekten mi? 😢",
    "yavru ceylan hadi ama... 💔",
    "Bir şans daha ver lütfen 🥺",
    "sol yanım lütfen 💖",
    "seni çok özlüyorum 💘",
    "Seni çok seviyorum 🌸",
    "Barışalım mı? 🤗"
  ];

  let noClickCount = 0;
  let yesScale = 1;

  // Fotoğraf sayısı ve dizini
  const imageCount = 15;
  let currentImage = 1;

  // Slideshow fonksiyonu
  function startSlideshow() {
    slideshow.style.backgroundImage = `url('assets/foto${currentImage}.jpg')`;
    currentImage = (currentImage % imageCount) + 1;
  }

  let slideshowInterval;

  // Başlat butonuna tıklayınca
  startBtn.addEventListener("click", () => {
    music.play();
    startScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    startSlideshow();
    slideshowInterval = setInterval(startSlideshow, 4000);
  });

  // Hayır butonuna tıklanınca
  noBtn.addEventListener("click", () => {
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;

    const msg = messages[noClickCount % messages.length];
    messageArea.innerText = msg;

    noClickCount++;
  });

  // Evet butonuna tıklanınca
  yesBtn.addEventListener("click", () => {
    const whatsappLink =
      "https://wa.me/905531642845?text=Evet%20sevgilim%20seninleyim%20%F0%9F%92%96";
    window.location.href = whatsappLink;
  });
});