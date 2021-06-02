const shopItem = document.querySelectorAll('.shopItem');
const mediaMin640 = window.matchMedia("(min-width: 640px)")
const mediaMax640 = window.matchMedia("(max-width: 640px)")
const mediaMin768 = window.matchMedia("(min-width: 768px)")
const mediaMax963 = window.matchMedia("(max-width: 963px)")
const mediaMin1200 = window.matchMedia("(min-width: 1200px)")
const mediaMax1570 = window.matchMedia("(max-width: 1570px)")
const collectionCountdown = document.querySelector(".collectionCountdown");
const shopItemWrapper = document.querySelectorAll(".shopItemWrapper");
const shopItemTitle = document.querySelectorAll(".shopItemTitle");
const shopItemDescription = document.querySelectorAll(".shopItemDescription");
const shopItemLine = document.querySelectorAll(".shopItemLine");
const shopItemImage = document.querySelectorAll(".shopItemImage");

let wtfa = 2;



// SHOP ITEM HOVER EFFECT


for (let i = 0; i < shopItemWrapper.length; i++) {
    shopItemWrapper[i].addEventListener('mouseenter', function () {
        shopItemImage[i].style = "filter: brightness(50%);"
        if ((mediaMin768.matches && mediaMax963.matches) || (mediaMin1200.matches && mediaMax1570.matches)) {
            shopItemTitle[i].classList.add('shopItemTitleHvrSmall');
            shopItemDescription[i].classList.add('shopItemDescriptionHvrSmall');
            shopItemLine[i].classList.add('shopItemLineHvrSmall');
        } else {
            shopItemTitle[i].classList.add('shopItemTitleHvr');
            shopItemDescription[i].classList.add('shopItemDescriptionHvr');
            shopItemLine[i].classList.add('shopItemLineHvr');
        }

    })
    shopItemWrapper[i].addEventListener('mouseleave', function () {
        shopItemImage[i].style = "filter: brightness(100%);"
        shopItemTitle[i].classList.remove('shopItemTitleHvr');
        shopItemDescription[i].classList.remove('shopItemDescriptionHvr');
        shopItemLine[i].classList.remove('shopItemLineHvr');
        shopItemTitle[i].classList.remove('shopItemTitleHvrSmall');
        shopItemDescription[i].classList.remove('shopItemDescriptionHvrSmall');
        shopItemLine[i].classList.remove('shopItemLineHvrSmall');
    })
}
















setTimeout(function () {
    collectionCountdown.style = "opacity: 1; height: unset;"
}, 1000)

// Update the count down every 1 second
let setCountdown = function (countDate, elementClassName) {
    setInterval(function () {

        let countDownDate1 = new Date(countDate).getTime();
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate1 - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let days2 = days;
        let hours2 = hours;
        let minutes2 = minutes;
        let seconds2 = seconds;

        let days3 = 'ден', hours3 = 'час', minutes3 = 'минута';

        if (days2 > 1) days3 = 'дни'
        if (hours2 > 1 || hours2 == 0) hours3 = 'часа'
        if (minutes2 > 1) minutes3 = 'минути'

        days = days.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        hours = hours.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        minutes = minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })

        seconds = seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })


        // Display the result in the element with id="demo"
        document.querySelector(elementClassName).innerHTML = `<span class="timerBox">${days}</span> <span class= "clockColon">:</span> <span class="timerBox">${hours}</span> <span class= "clockColon">:</span> <span class="timerBox">${minutes}</span> <span class= "clockColon">:</span> <span class="timerBox">${seconds}</span>`;
        document.querySelector('.collectionTimerText').innerHTML = `${days2} ${days3}, ${hours2} ${hours3}, ${minutes2} ${minutes3}, ${seconds2} секунди <br> до новата колекция!`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".collectionExpirationDate").innerHTML = "EXPIRED";
        }
    }, 1000);
}

setCountdown('June 10, 2021 20:30:00', '.collectionTimer');

if (mediaMin768.matches) {
    shopItem[i].classList.remove('mx-auto');
}

window.addEventListener('resize', resizeShopItem());

// window.addEventListener('resize', function () {


// })

function resizeShopItem() {
    if (mediaMin640.matches) {
        for (let i = 0; i < shopItem.length; i++) {
            if (!shopItem[i].classList.contains('col-10')) {
                shopItem[i].classList.remove('col-12');
                shopItem[i].classList.add('col-10');
            }
        }
    }

    if (mediaMax640.matches) {
        for (let i = 0; i < shopItem.length; i++) {
            if (shopItem[i].classList.contains('col-10')) {
                shopItem[i].classList.remove('col-10');
                shopItem[i].classList.add('col-12');
            }
        }
    }
}

// Set the date we're counting down to
// let countDownDate = new Date("April 27, 2021 20:30:00").getTime();


setTimeout(function () {

    collectionCountDown.style = "opacity: 1;"
}, 1000)



