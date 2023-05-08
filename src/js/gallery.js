const gallery = document.querySelector('.gallery');
let allImages;
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
const popupArrowLeft = document.querySelector('.popup__arrow-btn--left');
const popupArrowRight = document.querySelector('.popup__arrow-btn--right');

const imageAmount = 40;
let currentImageIndex;

const createImages = () => {
    for(let i = 1; i <= imageAmount; i++) {
        const li = document.createElement('li');
        li.classList.add('gallery__image');
        li.setAttribute('tabindex', '0');
        const image = document.createElement('img');
        image.setAttribute('src', `./dist/img/gallery/${i}.jpg`)
        li.append(image);
        gallery.append(li);

        allImages = document.querySelectorAll('.gallery__image');
    }
}

const showImage = (index) => {
    popup.classList.add('active');

    popupImage.src = `./dist/img/gallery/big-${index + 1}.jpg`;

    currentImageIndex = index + 1;

    document.body.classList.add('active');

    allImages.forEach(image => {
        image.setAttribute('tabindex', '-1');
    })
}

const closePopup = () => {
    popup.classList.add('hidden');
    setTimeout(() => {
        popup.classList.remove('hidden');
        popup.classList.remove('active');
        document.body.classList.remove('active');
    }, 300)

    allImages.forEach(image => {
        image.setAttribute('tabindex', '0');        
    })
}

const showNextImage = () => {
    if(currentImageIndex >= allImages.length) {
        currentImageIndex = 0;
    }

    currentImageIndex++;
    popupImage.src = `./dist/img/gallery/big-${currentImageIndex}.jpg`;
}

const showPreviousImage = () => {
    if(currentImageIndex <= 1) {
        currentImageIndex = allImages.length + 1;
    }

    currentImageIndex--;
    popupImage.src = `./dist/img/gallery/big-${currentImageIndex}.jpg`;
}

createImages();

allImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        showImage(index);
    })
});

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup')) {
        closePopup();
    }
})

popupArrowRight.addEventListener('click', showNextImage);
popupArrowLeft.addEventListener('click', showPreviousImage);

document.addEventListener('keyup', (e) => {
    if(e.keyCode === 37) {
        showPreviousImage();
    } else if(e.keyCode === 39) {
        showNextImage();
    }
});