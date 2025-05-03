// document.addEventListener('DOMContentLoaded', function () {
//     const burgerMenu = document.getElementById('burger-menu');
//     const navbarNav = document.querySelector('.navbar-nav');

//     burgerMenu.addEventListener('click', function (e) {
//         e.preventDefault();
//         navbarNav.classList.toggle('active');
//     });
// });

const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#burger-menu').onclick = () =>{
    navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#burger-menu');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});