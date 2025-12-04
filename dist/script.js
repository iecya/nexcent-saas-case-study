const menuButton = document.getElementById('mobile-menu-toggle-button');
const mobileMenu = document.getElementById('navbar-default');

menuButton.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
});
