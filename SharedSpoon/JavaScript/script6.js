// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Donation form submit
const donateForm = document.getElementById('donateForm');
const thankYou = document.getElementById('thankYouMessage');

donateForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual form submission

  // Show confirmation popup
  thankYou.style.display = 'block';
  donateForm.reset();
});

// Close popup
function closeThankYou() {
  thankYou.style.display = 'none';
}

// Current time & date in footer
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleString();
  document.getElementById('current-time').textContent = timeStr;
}
setInterval(updateTime, 1000);
updateTime();
