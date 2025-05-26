// Eenvoudige toggle voor mobiele navigatie
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.navbar-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
});