if (window.matchMedia("(min-width: 1200px)").matches) {
    // footer
    document.querySelector('#footerAll').classList.add('footerDesktop')
}

window.addEventListener('resize', function (e) {
    if (window.matchMedia("(min-width: 1200px)").matches) {
        // footer
        document.querySelector('#footerAll').classList.add('footerDesktop')
    }

    if (!window.matchMedia("(min-width: 1200px)").matches) {
        // footer
        document.querySelector('#footerAll').classList.remove('footerDesktop')
    }
})


