

// init Swiper:

const mySwiperKicks = new Swiper('.mySwiperKicks', {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        color: 'white'
    },
});

const mySwiperCollections = new Swiper('.mySwiperCollections', {
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        color: 'white'
    },
});

const mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const mySwiper2 = new Swiper('.mySwiperReviews', {
    slidesPerView: auto,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});


