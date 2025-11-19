// Live Time & Date in Footer
function updateTime() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleString();
}
updateTime();
setInterval(updateTime, 1000);

// Fade-in News Boxes on Scroll
const newsBoxes = document.querySelectorAll('.news-box');

function showNewsBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  newsBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      box.classList.add('show');
    }
  });
}

window.addEventListener('scroll', showNewsBoxes);
showNewsBoxes();
