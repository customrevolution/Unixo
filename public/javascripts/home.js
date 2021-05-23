const mediaQueryFirst = window.matchMedia("(max-width: 640px)");
const mediaQuery641 = window.matchMedia("(min-width: 641px)");
const mediaQuery768 = window.matchMedia("(min-width: 768px)");
const mediaQuery992 = window.matchMedia("(min-width: 992px)");
// const mediaQuery1200 = window.matchMedia("(min-width: 1200px)");
const mediaQuery1430 = window.matchMedia("(min-width: 1430px)");
const wavyCol1 = document.querySelector('#wavyCol1');
const wavyCol2 = document.querySelector('#wavyCol2');
// const footerAll = document.querySelector('#footerAll');




if (mediaQueryFirst.matches) {
    // Carousel
    document.querySelector('#carouselImg1').src = '/images/carouselMobile/carousel1_5.jpg'
    document.querySelector('#carouselImg2').src = '/images/carouselMobile/carousel2_5.jpg'
    document.querySelector('#carouselImg3').src = '/images/carouselMobile/carousel3_5.jpg'

    // Section 3
    document.querySelector('#cont3Row1Img').src = '/images/section3/img1.jpg'


    // Wavy
    wavyCol1.classList.remove('text-left');
    wavyCol2.classList.remove('text-left');
}

if (mediaQuery641.matches) {
    // Carousel
    document.querySelector('#carouselImg2').src = '/images/carouselBig/carousel2_2.jpg'
    document.querySelector('#carouselImg3').src = '/images/carouselBig/carousel3_2.jpg'
    document.querySelector('#carouselImg1').src = '/images/carouselBig/carousel1_2.jpg'

    // Section 3
    // document.querySelector('#cont3Row1Img').src = 'img/section3/img1.jpg'
    wavyCol1.classList.remove('text-left');
    wavyCol2.classList.remove('text-left');
}

if (mediaQuery992.matches) {
    wavyCol1.classList.add('text-left');
    wavyCol2.classList.add('text-left');

}

// if (mediaQuery1200.matches) {

//     // footer
//     footerAll.classList.add('footerDesktop')
// }



if (mediaQuery1430.matches) {
    // Carousel
    document.querySelector('#carouselImg1').src = '/images/carouselWide/carousel1_2.jpg'
    document.querySelector('#carouselImg2').src = '/images/carouselWide/carousel2_2.jpg'
    document.querySelector('#carouselImg3').src = '/images/carouselWide/carousel3_2.jpg'
}

window.addEventListener('resize', function (e) {

    wavyAlign(wavyCol1);
    wavyAlign(wavyCol2);


    if (mediaQueryFirst.matches) {
        //Carousel
        document.querySelector('#carouselImg1').src = '/images/carouselMobile/carousel1_5.jpg'
        document.querySelector('#carouselImg2').src = '/images/carouselMobile/carousel2_5.jpg'
        document.querySelector('#carouselImg3').src = '/images/carouselMobile/carousel3_5.jpg'

        //Section3
        // document.querySelector('#cont3Row1Img').src = 'img/section3/img1.jpg'
    }

    if (mediaQuery641.matches) {
        // Carousel
        document.querySelector('#carouselImg1').src = '/images/carouselBig/carousel1_2.jpg'
        document.querySelector('#carouselImg2').src = '/images/carouselBig/carousel2_2.jpg'
        document.querySelector('#carouselImg3').src = '/images/carouselBig/carousel3_2.jpg'

    }

    if (mediaQuery768.matches) {
        wavyCol1.classList.remove('text-left');
        wavyCol2.classList.remove('text-left');
    }

    if (mediaQuery992.matches) {
        wavyCol1.classList.add('text-left');
        wavyCol2.classList.add('text-left');
    }


    // if (mediaQuery1200.matches) {
    //     // footer
    //     footerAll.classList.add('footerDesktop')
    // }

    // if (!mediaQuery1200.matches) {
    //     // footer
    //     footerAll.classList.remove('footerDesktop')
    // }


    if (mediaQuery1430.matches) {
        document.querySelector('#carouselImg1').src = '/images/carouselWide/carousel1_2.jpg'
        document.querySelector('#carouselImg2').src = '/images/carouselWide/carousel2_2.jpg'
        document.querySelector('#carouselImg3').src = '/images/carouselWide/carousel3_2.jpg'
    }

})




function wavyAlign(wavyElement) {
    if (mediaQuery992.matches) {
        wavyElement.classList.add('text-left');
    } else {
        wavyElement.classList.remove('text-left')
    }
}



$('.carousel').on('touchstart', function (event) {
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function (event) {
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if (Math.floor(xClick - xMove) > sensitivityInPx) {
            $(this).carousel('next');
        }
        else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function () {
        $(this).off('touchmove');
    });
});










const mySwiperReviews = new Swiper('.mySwiperReviews', {
    slidesPerView: auto,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});