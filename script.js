document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const startScreen = document.getElementById("startScreen");
  const mainContent = document.getElementById("mainContent");
  const music = document.getElementById("bgMusic");

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

  // Slideshow değişkenleri
  let imageCount = 15;
  let currentImage = 1;
  let activeSlide = 1;

  function startSlideshow() {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");

    const nextImage = `url('assets/foto${currentImage}.jpg')`;
    const fadeInSlide = activeSlide === 1 ? slide2 : slide1;
    const fadeOutSlide = activeSlide === 1 ? slide1 : slide2;

    fadeInSlide.style.backgroundImage = nextImage;
    fadeInSlide.classList.add("active");
    fadeOutSlide.classList.remove("active");

    activeSlide = activeSlide === 1 ? 2 : 1;
    currentImage = (currentImage % imageCount) + 1;
  }

  let slideshowInterval;

  startBtn.addEventListener("click", () => {
    music.play();
    startScreen.style.display = "none";
    mainContent.classList.remove("hidden");

    startSlideshow();
    slideshowInterval = setInterval(startSlideshow, 4000);
  });

  noBtn.addEventListener("click", () => {
    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;

    const msg = messages[noClickCount % messages.length];
    messageArea.innerText = msg;

    noClickCount++;
  });

  yesBtn.addEventListener("click", () => {
    const whatsappLink =
      "https://wa.me/905531642845?text=Evet%20sevgilim%20seninleyim%20%F0%9F%92%96";
    window.location.href = whatsappLink;
  });
});
