const headerMenu = document.getElementById('header-menu');
const headerDropdown = document.getElementById('header-dropdown');

headerMenu.addEventListener('click', () => {
    headerDropdown.classList.toggle('active');
    headerMenu.classList.toggle('rotated');
});