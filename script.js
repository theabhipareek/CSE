document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navbar.classList.toggle('active');
  });

  document.querySelectorAll('.navbar a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navbar.classList.remove('active');
      });
  });
});
