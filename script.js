// Toggle menu when hamburger is clicked
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');

  // Add animation by toggling a fade class
  if (navLinks.classList.contains('active')) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.maxHeight = "0";
  }
}

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('active');
    navLinks.style.maxHeight = "0";
  }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    navLinks.style.maxHeight = "0";
  });
});
