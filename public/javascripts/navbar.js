
var scrollPosition = $("body, html").scrollTop()

document.querySelectorAll('.shoppingBag')[0].src = "/images/icons/shopping-bag-white.png"
document.querySelectorAll('.shoppingBag')[1].src = "/images/icons/shopping-bag.png"


let navEnter = true;

const navbar = document.querySelector('.navbar');
// let widthHelper = `width: ${window.innerWidth - (window.innerWidth / 5)};`

// window.addEventListener('resize', function () {
//     widthHelper = `width: ${window.innerWidth - (window.innerWidth / 5)};`
// })

if (navEnter) {



    navbar.addEventListener('mouseenter', function () {
        navbar.classList.remove('navbar-dark', 'bg-transparent');
        navbar.classList.add('navbar-light', 'bg-light', 'navbar-border');
        document.querySelector('.shoppingBagValid').src = "/images/icons/shopping-bag.png"
    })

    navbar.addEventListener('mouseleave', function () {
        if (window.scrollY != 0) {
            navbar.classList.remove('navbar-dark', 'bg-transparent');
            navbar.classList.add('navbar-light', 'bg-light', 'navbar-border');
            document.querySelector('.shoppingBagValid').src = "/images/icons/shopping-bag.png"
        }

        if (window.scrollY == 0) {
            navbar.classList.remove('navbar-light', 'bg-light', 'navbar-border');
            navbar.classList.add('navbar-dark', 'bg-transparent');
            document.querySelector('.shoppingBagValid').src = "/images/icons/shopping-bag-white.png"

        }
    })
}

window.addEventListener('scroll', function (e) {
    if (window.scrollY != 0) {
        navbar.classList.remove('navbar-dark', 'bg-transparent');
        navbar.classList.add('navbar-light', 'bg-light', 'navbar-border');
        document.querySelector('.shoppingBagValid').src = "/images/icons/shopping-bag.png"
    }

    if (window.scrollY == 0) {
        navbar.classList.remove('navbar-light', 'bg-light', 'navbar-border');
        navbar.classList.add('navbar-dark', 'bg-transparent');
        document.querySelector('.shoppingBagValid').src = "/images/icons/shopping-bag-white.png"

    }
})

document.querySelector('.navbarDropDown').addEventListener('click', function (e) {
    document.querySelector('.sidebar').classList.add('sidebarActive');
    document.querySelector('.overlay').classList.add('overlayActive');
    document.querySelector('body').classList.add('overflow-hidden1');

    if (document.querySelector('.sidebarRowMain').classList.contains('sidebarRowCloseActive')) {
        document.querySelector('.sidebarRowMain').classList.remove('sidebarRowCloseActive')
        document.querySelector('.sidebarRowBrand').classList.remove('sidebarRowCloseActive')

    }

    setTimeout(timeHelper2, 300);

    function timeHelper2() {
        document.querySelector('.sidebarRowMain').classList.add('sidebarRowActive');
        document.querySelector('.sidebarRowBrand').classList.add('sidebarRowActive');

    }

    if (window.matchMedia("(min-width: 641px)").matches) {
        document.querySelector('.sidebar').style.width = '340px';
    } else {
        let widthHelper = `width: ${window.innerWidth - (window.innerWidth / 5)}px;`
        document.querySelector('.sidebar').style = widthHelper;
    }
    document.querySelector('.sidebarRowBrand').classList.add('sidebarRowCloseActive');

})

document.querySelector('.sidebarClose').addEventListener('click', function (e) {
    sidebarClose();
})

document.querySelector('.overlay').addEventListener('click', function (e) {
    sidebarClose();
})

function sidebarClose() {
    document.querySelector('body').classList.remove('overflow-hidden1');
    document.querySelector('.overlay').classList.remove('overlayActive');
    document.querySelector('.sidebar').style.width = '0px';

    document.querySelector('.sidebarRowMain').classList.remove('sidebarRowActive');
    document.querySelector('.sidebarRowBrand').classList.remove('sidebarRowActive');

    document.querySelector('.sidebarRowMain').classList.add('sidebarRowCloseActive');
    document.querySelector('.sidebarRowBrand').classList.add('sidebarRowCloseActive');


    setTimeout(timeHelper, 500);
    function timeHelper() {
        document.querySelector('.sidebar').classList.remove('sidebarActive');
    }
}