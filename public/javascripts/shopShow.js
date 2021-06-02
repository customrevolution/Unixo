const sizeButtons = document.querySelectorAll('.sizeBox')
const sizeButtonsMobile = document.querySelectorAll('.sizeBoxMobile')
const collectionItem1Name = document.querySelector('.collectionItem1Name')
const collectionItem2Name = document.querySelector('.collectionItem2Name')
const collectionItem3Name = document.querySelector('.collectionItem3Name')
const collectionItem4Name = document.querySelector('.collectionItem4Name')

const collectionItem1Img = document.querySelector('.collectionItem1Img')
const collectionItem2Img = document.querySelector('.collectionItem2Img')
const collectionItem3Img = document.querySelector('.collectionItem3Img')
const collectionItem4Img = document.querySelector('.collectionItem4Img')

const shopShowMainImage = document.querySelector('.shopShowMainImage');
const swiperShopShowImg = document.querySelectorAll('.swiperShopShowImg');

const shopShowContainer = document.querySelector('.shopShowContainer');
const shopShowRow = document.querySelector('.shopShowRow');
const shopShowBackground = document.querySelector('.shopShowBackground');

let sizeSelected, sizeSelectedMobile, currentCollection;

for (let i = 0; i < swiperShopShowImg.length; i++) {
    swiperShopShowImg[i].addEventListener('click', function () {
        shopShowMainImage.src = swiperShopShowImg[i].src;
    })
}

let shopShowRowHeight = shopShowRow.clientHeight;


if (!window.matchMedia("(min-width: 992px)").matches) {
    shopShowBackground.style = `height: ${shopShowRowHeight + 250}px !important`
    shopShowContainer.style = `height: ${shopShowBackground.clientHeight}px !important`;
}



if (window.matchMedia("(min-width: 992px)").matches) {
    shopShowBackground.style = `height: ${shopShowRowHeight + 450}px !important`
    shopShowContainer.style = `height: ${shopShowBackground.clientHeight}px !important`;
}


if (window.matchMedia("(min-width: 1105px)").matches) {
    shopShowBackground.style = `height: ${shopShowRowHeight + 200}px !important`
    shopShowContainer.style = `height: ${shopShowBackground.clientHeight}px !important`;
}






window.addEventListener('resize', function () {
    shopShowRowHeight = shopShowRow.clientHeight;

    if (!window.matchMedia("(min-width: 992px)").matches) {
        shopShowBackground.style = `height: ${shopShowRowHeight + 250}px !important`
        shopShowContainer.style = `height: ${shopShowBackground.clientHeight}px !important`;
    }

    if (window.matchMedia("(min-width: 992px)").matches) {
        shopShowBackground.style = `height: ${shopShowRowHeight + 450}px !important`
        shopShowContainer.style = `height: ${shopShowBackground.clientHeight}px !important`;
    }


})








for (let i = 0; i < 20; i++) {
    sizeButtons[i].addEventListener('click', function () {
        isSizeSelected();
        sizeButtons[i].classList.add('helperBorder')

    })
}

collectionItem1Name.addEventListener('mouseenter', function () {
    collectionItem1Img.classList.add('shopShowImageBrightUp')
})

collectionItem1Img.addEventListener('mouseover', function () {
    collectionItem1Img.classList.remove('shopShowImageBrightUp')
})

collectionItem2Name.addEventListener('mouseover', function () {
    collectionItem2Img.classList.add('shopShowImageBrightUp')
})

collectionItem3Img.addEventListener('mouseover', function () {
    collectionItem3Img.classList.remove('shopShowImageBrightUp')
})

collectionItem3Name.addEventListener('mouseover', function () {
    collectionItem3Img.classList.add('shopShowImageBrightUp')
})

collectionItem2Img.addEventListener('mouseover', function () {
    collectionItem2Img.classList.remove('shopShowImageBrightUp')
})

collectionItem4Name.addEventListener('mouseover', function () {
    collectionItem4Img.classList.add('shopShowImageBrightUp')
})

collectionItem4Img.addEventListener('mouseover', function () {
    collectionItem4Img.classList.remove('shopShowImageBrightUp')
})




const isSizeSelected = function () {
    for (let i = 0; i < 20; i++) {
        if (sizeButtons[i].classList.contains('helperBorder')) {
            sizeButtons[i].classList.remove('helperBorder')
        }
    }
}



for (let i = 0; i < 20; i++) {
    sizeButtonsMobile[i].addEventListener('click', function () {
        isSizeSelectedMobile();
        sizeButtonsMobile[i].classList.add('helperBorder')

    })
}

const isSizeSelectedMobile = function () {
    for (let i = 0; i < 20; i++) {
        if (sizeButtonsMobile[i].classList.contains('helperBorder')) {
            sizeButtonsMobile[i].classList.remove('helperBorder')
        }
    }
}


if (kick.shopId <= 69004) { currentCollection = 1 }
if ((kickShopId >= 69005 && kickShopId <= 69008)) { currentCollection = 2 }
if ((kickShopId >= 6909 && kickShopId <= 69012)) { currentCollection = 3 }
