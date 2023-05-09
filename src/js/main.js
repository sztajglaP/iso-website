const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
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

const addVideoBackground = () => {
    if(window.innerWidth >= 1200) {
        header.innerHTML = 
        `
            <div class="header__shadow"></div>

            <video class="header__video header__video--mobile" autoplay loop muted playsinline>
                <source src="./dist/img/background.mp4" type="video/mp4">
            </video> 
            <div class="header__icon">
                <img src="./dist/img/logo-big.webp" alt="logo firmy">
            </div>
            <h1 class="header__title">
                    iso
                    <span>film & photography</span>
            </h1>
        `
    } else {
        header.innerHTML = 
        `
            <div class="header__shadow"></div>

            <video class="header__video header__video--mobile" autoplay loop muted playsinline>
                <source src="./dist/img/background-mobile.mp4" type="video/mp4">
            </video> 
            <div class="header__icon">
                <img src="./dist/img/logo-big.webp" alt="logo firmy">
            </div>
            <h1 class="header__title">
                    iso
                    <span>film & photography</span>
            </h1>
        `
        console.log('elo');
    }
}

// listeners
window.onload = () => {
    addVideoBackground();
    navMenuButton.addEventListener('click', showMenu);
    allMenuLinks.forEach(link => link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navMenuButton.classList.remove('active');
        }
    }))
    window.addEventListener('scroll', animationItem)
}