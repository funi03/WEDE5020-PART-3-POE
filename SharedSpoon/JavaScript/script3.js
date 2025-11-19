/* ========== Image Lightbox ========== */
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-lightbox");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    lightbox.style.display = "flex";
    lightboxImg.src = images[index].src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

/* Next image */
nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  lightboxImg.src = images[index].src;
});

/* Previous image */
prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  lightboxImg.src = images[index].src;
});

/* Close when clicking outside */
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

/* Live Time (Footer) */
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();
