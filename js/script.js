document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    burgerMenu.addEventListener('click', function (e) {
        e.preventDefault();
        navbarNav.classList.toggle('active');
    });
});
