const dropdown = document.querySelector('.nav-small-dropdown')
const menuButton = document.getElementById('header-menu');

menuButton.addEventListener('click', () => {
    dropdown.classList.toggle('active');
})