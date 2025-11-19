// Live time
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);

// Lightbox for  map
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-modal-img");
const closeLightbox = document.getElementById("close-lightbox");

// For map
document.getElementById("map").addEventListener("click", ()=>{
  lightboxModal.style.display="flex";
  lightboxImg.src = "IMAGES/map-snapshot.png"; // optional: static map screenshot
});

// Close modal
closeLightbox.addEventListener("click", ()=>{
  lightboxModal.style.display="none";
});

lightboxModal.addEventListener("click", (e)=>{
  if(e.target === lightboxModal) lightboxModal.style.display="none";
});
