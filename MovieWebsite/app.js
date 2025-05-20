let nextDom = document.querySelector('.next');
let prevDom = document.querySelector('.prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = document.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

// Fix: select all thumbnail items correctly
let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item');

// Fix: append the first thumbnail item correctly
thumbnailBorderDom.appendChild(thumbnailItemDom[0]);

nextDom.onclick = function() {
    showSlider('next');
};

prevDom.onclick = function() {
    showSlider('prev');
};

let timeRunning = 1000;
let runTimeOut;

function showSlider(type) {
    let SliderItemDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemDom = thumbnailBorderDom.querySelectorAll('.item'); // Re-select fresh DOM list

    if (type === 'next') {
        SliderDom.appendChild(SliderItemDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemDom[SliderItemDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemDom[thumbnailItemDom.length - 1]); // Fix here
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}
