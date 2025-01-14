// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  // Example: Toggle Mobile Navigation
  const menuButton = document.getElementById('menu-button');
  const navigationMenu = document.querySelector('.navigation ul');

  if (menuButton && navigationMenu) {
    menuButton.addEventListener('click', () => {
      navigationMenu.classList.toggle('active');
    });
  }
});
