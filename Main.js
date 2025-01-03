// Toggle the menu
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  const menuButton = document.querySelector('.menu-button i'); // Ambil icon di dalam tombol
  
  // Tampilkan atau sembunyikan menu
  navMenu.classList.toggle('show'); // Add or remove 'show' class

  // Ganti icon
  if (menuButton.classList.contains('fa-bars')) {
    menuButton.classList.remove('fa-bars');
    menuButton.classList.add('fa-xmark');
  } else {
    menuButton.classList.remove('fa-xmark');
    menuButton.classList.add('fa-bars');
  }
}

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 50,
  
    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });