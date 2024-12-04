// JavaScript for the Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn'); // Hamburger button
    const dropdownMenu = document.querySelector('.dropdown-menu'); // Dropdown menu
  
    // Toggle menu on button click
    menuBtn.addEventListener('click', () => {
      const isOpen = dropdownMenu.classList.contains('show'); // Check if menu is open
  
      // Toggle classes for dropdown and button icon
      dropdownMenu.classList.toggle('show', !isOpen); // Show or hide menu
      menuBtn.classList.toggle('cross', !isOpen); // Transform hamburger to cross
    });
  });
  