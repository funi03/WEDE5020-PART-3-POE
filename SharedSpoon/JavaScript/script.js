/* HERO BACKGROUND SLIDESHOW  */
const hero = document.getElementById("hero");

const heroImages = [
  "IMAGES/img2.jpg",
  "IMAGES/img4.jpeg",
  "IMAGES/img12.png"
];

let heroIndex = 0;

function changeHeroImage() {
  hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}

changeHeroImage();
setInterval(changeHeroImage, 2000);

/*  LIGHTBOX */
const lightbox = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightboxBtn = document.getElementById('close-lightbox');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

hero.addEventListener("click", () => {
  lightbox.style.display = "flex";
  lightboxImg.src = heroImages[heroIndex];
});

// Previous button
prevArrow.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing modal
  heroIndex = (heroIndex - 1 + heroImages.length) % heroImages.length;
  lightboxImg.src = heroImages[heroIndex];
});

// Next button
nextArrow.addEventListener("click", (e) => {
  e.stopPropagation();
  heroIndex = (heroIndex + 1) % heroImages.length;
  lightboxImg.src = heroImages[heroIndex];
});

// Close when clicking on the close button
closeLightboxBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

/* LIVE TIME*/
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);
