const faqContent = document.querySelectorAll('.faqContent');
const faqQACol = document.querySelectorAll('.faqQACol');
const faqEmailCol = document.querySelectorAll('.faqEmailCol');
const faqMediaQueryFirst = window.matchMedia("(max-width: 400px)");
const faqMediaQuery401 = window.matchMedia("(min-width: 401px)");
const faqMediaQuery451 = window.matchMedia("(min-width: 451px)");

faqResize();


faqQACol[0].addEventListener('click', function (e) {
    if (!faqQACol[0].classList.contains('faqResize')) {
        faqQACol[0].classList.add('faqResize');
        faqContent[0].classList.add('faqDisplay');

        setTimeout(faqTime, 100);
        function faqTime() {
            faqContent[0].classList.add('faqOpacity');
        }
    } else {
        faqQACol[0].classList.remove('faqResize');
        faqContent[0].classList.remove('faqOpacity');
        setTimeout(faqTimeTwo, 500);
        function faqTimeTwo() {
            faqContent[0].classList.remove('faqDisplay');
        }
    }
})

faqQACol[1].addEventListener('click', function (e) {
    if (!faqQACol[1].classList.contains('faqResize')) {
        faqQACol[1].classList.add('faqResize');
        faqContent[1].classList.add('faqDisplay');

        setTimeout(faqTime1, 100);
        function faqTime1() {
            faqContent[1].classList.add('faqOpacity');
        }
    } else {
        faqQACol[1].classList.remove('faqResize');
        faqContent[1].classList.remove('faqOpacity');
        setTimeout(faqTimeTwo2, 500);
        function faqTimeTwo2() {
            faqContent[1].classList.remove('faqDisplay');
        }
    }
})

faqQACol[2].addEventListener('click', function (e) {
    if (!faqQACol[2].classList.contains('faqResize')) {
        faqQACol[2].classList.add('faqResize');
        faqContent[2].classList.add('faqDisplay');

        setTimeout(faqTime2, 100);
        function faqTime2() {
            faqContent[2].classList.add('faqOpacity');
        }
    } else {
        faqQACol[2].classList.remove('faqResize');
        faqContent[2].classList.remove('faqOpacity');
        setTimeout(faqTimeTwo3, 500);
        function faqTimeTwo3() {
            faqContent[2].classList.remove('faqDisplay');
        }
    }
})

faqQACol[3].addEventListener('click', function (e) {
    if (!faqQACol[3].classList.contains('faqResize')) {
        faqQACol[3].classList.add('faqResize');
        faqContent[3].classList.add('faqDisplay');

        setTimeout(faqTime3, 100);
        function faqTime3() {
            faqContent[3].classList.add('faqOpacity');
        }
    } else {
        faqQACol[3].classList.remove('faqResize');
        faqContent[3].classList.remove('faqOpacity');
        setTimeout(faqTimeTwo4, 500);
        function faqTimeTwo4() {
            faqContent[3].classList.remove('faqDisplay');
        }
    }
})



window.addEventListener('resize', function (e) {
    faqResize();
})



function resizeOnClick(colToResize) {
    colToResize.classList.add('faqResize');
}

function visibleOnClick(contentVisible) {
    contentVisible.classList.add('faqVisible');
}

function faqResize() {

    if (faqMediaQueryFirst.matches) {
        for (var b = 0; b < 3; b++) {
            faqEmailCol[b].classList.add('col-12');
        }
    }

    if (faqMediaQuery401.matches) {
        for (var c = 0; c < 3; c++) {
            faqEmailCol[c].classList.remove('col-12');
            faqEmailCol[c].classList.add('col-11');
        }
    }

    if (faqMediaQuery451.matches) {
        for (var a = 0; a < 3; a++) {
            faqEmailCol[a].classList.remove('col-12');
            faqEmailCol[a].classList.remove('col-11');
            faqEmailCol[a].classList.add('col-10');
        }
    }
}


$(".faqQACol1").click(function () {
    $(".plus-button1").toggleClass("open");
});

$(".faqQACol2").click(function () {
    $(".plus-button2").toggleClass("open");
});

$(".faqQACol3").click(function () {
    $(".plus-button3").toggleClass("open");
});

$(".faqQACol4").click(function () {
    $(".plus-button4").toggleClass("open");
});