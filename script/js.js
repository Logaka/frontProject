const navLinks = document.querySelectorAll('.item');

const currentPage = window.location.pathname;

navLinks.forEach(link => {
    if(link.getAttribute('href') === currentPage.split("/frontProject/html/").pop()){
        link.classList.add('active');
    }
});

const hamburgerButton = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menuLinks');

hamburgerButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});