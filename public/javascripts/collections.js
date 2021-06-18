const collectionsQuery578 = window.matchMedia("(max-width: 576px)");
const collectionsQuery1200 = window.matchMedia("(min-width: 1200px)");
const shopCollectionsHeader = document.querySelectorAll(".shopCollectionsHeader");
const collectionsSubTitleText = document.querySelectorAll(".collectionsSubTitleText");
const shopCollectionsImage = document.querySelectorAll(".shopCollectionsImage");
const collectionExpirationDesktop = document.querySelector(".collectionExpirationDesktop");

// let currentWidth = document.querySelector('.collectionsCol').clientWidth;
// let collectionSubTitleTopMargin = (100 - ((287.4 / currentWidth) * 100)) / 2;





setTimeout(function () {
    collectionExpirationDesktop.style = "opacity: 1;"
}, 950)







const getWidth = function (domElementClass) {
    return document.querySelector(`.${domElementClass}`).clientWidth;
}

let currentWidth = getWidth('collectionsCol')

const getLeftPosition = function (domElementClass) {
    return (100 - ((getWidth(`${domElementClass}`) / currentWidth) * 100)) / 2;
}

const centerAbsolute = function (domElementClass) {
    const allElements = document.querySelectorAll(`.${domElementClass}`);
    for (let i = 0; i < allElements.length; i++) {
        let leftPosition = (100 - ((allElements[i].clientWidth / currentWidth) * 100)) / 2;
        allElements[i].style = `left: ${leftPosition}% !important`;
    }
}



centerAbsolute('collectionTitleTop');
centerAbsolute('collectionSubTitleTop');
centerAbsolute('collectionButtonWraper1');

centerAbsolute('collectionTitleCenter');
centerAbsolute('collectionSubTitleCenter');
centerAbsolute('collectionButtonWraper2');

centerAbsolute('collectionTitleBottom');







window.addEventListener('resize', function (e) {
    currentWidth = getWidth('collectionsCol')
    centerAbsolute('collectionTitleTop');
    centerAbsolute('collectionSubTitleTop');
    centerAbsolute('collectionButtonWraper1');

    centerAbsolute('collectionTitleCenter');
    centerAbsolute('collectionSubTitleCenter');
    centerAbsolute('collectionButtonWraper2');

    centerAbsolute('collectionTitleBottom');


    // if (collectionsQuery1200.matches) {
    //     document.querySelector('.collectionSubTitleCenter').innerHTML = "I'm all about nightlife <br> I live during the <br> night"
    // } else {
    // }

})

centerAbsolute('collectionSubTitleTop');









// Set the date we're counting down to
let countDownDate = new Date("June 30, 2021 20:30:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // countdownTimer.innerHTML = `<span class="collectionNext" New collection after  ${days}d ${hours}h ${minutes}m  </span>`

    // Display the result in the element with id="demo"
    document.querySelectorAll(".collectionExpirationDate")[0].innerHTML = "New collection after " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";


    document.querySelectorAll(".collectionExpirationDate")[1].innerHTML = "New collection after " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    document.querySelectorAll(".collectionExpirationDate")[2].innerHTML = "New collection after " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // alert('sdsd')
    // document.querySelector('#countdownTimer123').innerHTML = `<span>${days}d ${hours}h ${minutes}m ${seconds}s</span>`;

    // Display the result in the element with id = "demo"
    document.querySelector(".collectionExpirationDateDesktop").innerHTML =
        `<span class="collectionNext" New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>
         <span class="collectionNext">New collection after  ${days}d ${hours}h ${minutes}m  </span>`;


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".collectionExpirationDate").innerHTML = "EXPIRED";
    }
}, 1000);


// Dont decrease brighness on hover for headers on collections
for (let i = 0; i < shopCollectionsHeader.length; i++) {
    shopCollectionsHeader[i].addEventListener('mouseenter', function () {
        shopCollectionsImage[i].style = "filter: brightness(80%) !important";
    })

    shopCollectionsHeader[i].addEventListener('mouseout', function () {
        shopCollectionsImage[i].style = "";
    })
}

// Dont decraese brighness on hover for subTitles on collections
for (let i = 0; i < collectionsSubTitleText.length; i++) {
    collectionsSubTitleText[i].addEventListener('mouseenter', function () {
        shopCollectionsImage[i].style = "filter: brightness(80%) !important";
    })

    collectionsSubTitleText[i].addEventListener('mouseout', function () {
        shopCollectionsImage[i].style = "";
    })
}

