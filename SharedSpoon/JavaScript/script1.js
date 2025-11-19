// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('change', () => {
  navLinks.classList.toggle('active');
});

// Live Time in Footer
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);

// Lightbox for About Image
const aboutImg = document.getElementById('about-img');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

aboutImg.addEventListener('click', () => {
  lightboxImg.src = aboutImg.src;
  lightboxModal.style.display = 'flex';
});

closeLightbox.addEventListener('click', () => {
  lightboxModal.style.display = 'none';
});

// Close modal when clicking outside the image
lightboxModal.addEventListener('click', (e) => {
  if(e.target === lightboxModal) {
    lightboxModal.style.display = 'none';
  }
});
