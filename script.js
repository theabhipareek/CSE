document.addEventListener('DOMContentLoaded', function() {
  // Existing hamburger menu functionality
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

  // New carousel functionality
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showItem(index) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
  });

  // Optional: Auto-play functionality
  function autoPlay() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
  }

  // Uncomment the next line to enable auto-play
  // setInterval(autoPlay, 5000); // Change slide every 5 seconds
});
