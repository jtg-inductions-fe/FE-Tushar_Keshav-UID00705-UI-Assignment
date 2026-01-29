import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/main.scss';
import { initHeader } from './header.js';
import 'swiper/css/pagination';

new Swiper('.swiper', {
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    freeMode: true,

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 75,
            navigation: {
                enabled: true,
            },
        },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
    navigation: {
        prevEl: '.carousel-nav__btn--prev',
        nextEl: '.carousel-nav__btn--next',
        addIcons: true,
        enabled: false,
    },
});

initHeader();
