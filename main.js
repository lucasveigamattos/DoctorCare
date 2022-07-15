addEventListener('scroll', onScroll)

function showNavOnScroll() {
    const navigation = document.getElementById('navigation')

    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopOnScroll() {
    const backToTop = document.getElementById('backToTop')

    if (scrollY > 1000) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}

function onScroll() {
    showNavOnScroll()
    showBackToTopOnScroll()
}

onScroll()

function openMenu() {
    document.body.classList.add('menuExpanded')
}

function closeMenu() {
    document.body.classList.remove('menuExpanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal('#home, #home #stats, #services header, #services .card, #aboutUs header, #aboutUs .content, #contactUs header, #contactUs .content')