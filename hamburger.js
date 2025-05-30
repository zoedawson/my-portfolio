document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');
  const overlay = document.querySelector('.menu-overlay');  // updated here
  const navLinks = document.querySelectorAll('.navbar a');

  if (hamburger && navbar && overlay) {
    function toggleMenu() {
      navbar.classList.toggle('active');
      hamburger.classList.toggle('active');
      overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  }
});
