const navMenu = document.querySelector('.nav__menu');
const navMenuButton = document.querySelector('.nav__burger-btn');
const allMenuLinks = document.querySelectorAll('.nav__menu-item');

// functions
const showMenu = () => {
    navMenu.classList.toggle('active');
    navMenuButton.classList.toggle('active');
}

// listeners
navMenuButton.addEventListener('click', showMenu);
allMenuLinks.forEach(link => link.addEventListener('click', () => {
    if(navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navMenuButton.classList.remove('active');
    }
}))