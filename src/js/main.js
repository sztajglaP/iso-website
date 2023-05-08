const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__menu');
const navMenuButton = document.querySelector('.nav__burger-btn');
const allMenuLinks = document.querySelectorAll('.nav__menu-item');
const headerIcon = document.querySelector('.header__icon');
const animatedElements = document.querySelectorAll('.animated-element')

// functions
const showMenu = () => {
    navMenu.classList.toggle('active');
    navMenuButton.classList.toggle('active');

    allMenuLinks.forEach(link => {
        link.classList.toggle('animation');
    })

    allMenuLinks[0].style.animationDelay = '0.1s';
    allMenuLinks[1].style.animationDelay = '0.3s';
    allMenuLinks[2].style.animationDelay = '0.6s';
    allMenuLinks[3].style.animationDelay = '0.8s';
}

const animationItem = () => {
    animatedElements.forEach(el => {
        const element = el.getBoundingClientRect().top;
        if(element - nav.clientHeight < 700) {
            el.classList.add('animated');
        }
    })
}

// listeners
window.onload = () => {
    navMenuButton.addEventListener('click', showMenu);
    allMenuLinks.forEach(link => link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navMenuButton.classList.remove('active');
        }
    }))
    window.addEventListener('scroll', animationItem)
}