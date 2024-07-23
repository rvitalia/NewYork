document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const headerMobile = document.querySelector('.header_mobile');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        headerMobile.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // получаем скролл
    const scrollbarMeasure = document.createElement('div');
    scrollbarMeasure.style.width = '100px';
    scrollbarMeasure.style.height = '100px';
    scrollbarMeasure.style.overflow = 'scroll';
    scrollbarMeasure.style.position = 'absolute';
    scrollbarMeasure.style.top = '-9999px';

    document.body.appendChild(scrollbarMeasure);
    // Вычисление ширины полосы прокрутки
    const scrollbarWidth = scrollbarMeasure.offsetWidth - scrollbarMeasure.clientWidth;
    // Удаление измерительного элемента
    document.body.removeChild(scrollbarMeasure);
    // Установка CSS-переменной
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    document.body.classList.add('body-without-scroll');
});
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-projects', {
        slidesPerView: 1,
        spaceBetween: 60,
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        //     hide: false,
        // },
        breakpoints: {
            576: {
                slidesPerView: 1.5,
                spaceBetween: 60,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 60,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 60,
            },
            1440: {
                slidesPerView: 3.5,
                spaceBetween: 60,
            }
        }
    });
});