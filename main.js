const firstSlide = document.querySelector('.slider_item:first-child');

function slide() {
    const currentSlide = document.querySelector('.showing');
    if(currentSlide){
        currentSlide.classList.remove('showing');
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide) {
            nextSlide.classList.add('showing');
        } else {
            firstSlide.classList.add('showing');
        }
    } else {
        firstSlide.classList.add('showing');
    }
}

slide();
setInterval(slide, 2000);