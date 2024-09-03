const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let counter = 0;  

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
    } else {
        counter = 0;
    }
    slideImage();
    updateDots();
}

const goPrev = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slides.length - 1;
    }
    slideImage();
    updateDots();
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

const updateDots = () => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}