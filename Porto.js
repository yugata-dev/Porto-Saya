// Pastikan DOM sudah dimuat
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  // Fungsi untuk membuka sidebar
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    // Ubah ikon hamburger menjadi close (✕)
    const icon = hamburger.querySelector('i');
    if (icon) {
      icon.classList.remove('la-bars');
      icon.classList.add('la-times');
    }
  }
  
  // Fungsi untuk menutup sidebar
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    // Kembalikan ikon hamburger
    const icon = hamburger.querySelector('i');
    if (icon) {
      icon.classList.remove('la-times');
      icon.classList.add('la-bars');
    }
  }
  
  // Toggle saat hamburger diklik
  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  } 
  
  // Tutup sidebar saat overlay diklik
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // Opsional: tutup sidebar saat link menu diklik (untuk navigasi)
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
});