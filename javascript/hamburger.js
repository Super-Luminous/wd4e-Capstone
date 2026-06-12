const hamMenu  = document.querySelector('.ham-menu');
const navLinks = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  // Toggle visibility classes
  hamMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
  
});