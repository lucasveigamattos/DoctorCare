addEventListener('scroll', onScroll)

function showNavOnScroll() {
    const navigation = document.getElementById('navigation')
    scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')
}

function showBackToTopOnScroll() {
    const backToTop = document.getElementById('backToTop')

    if (scrollY > 1000) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
}

function activeMenuAtCurrentSection() {
    const targetLine = scrollY + innerHeight / 2

    const links = document.getElementById('navigation').getElementsByClassName('menu')[0].getElementsByTagName('li')

    const homeTop = document.getElementById('home').offsetTop
    const homeBottom = document.getElementById('home').offsetHeight

    const servicesTop = document.getElementById('services').offsetTop
    const servicesBottom = document.getElementById('services').offsetTop + document.getElementById('services').offsetHeight

    const aboutTop = document.getElementById('aboutUs').offsetTop
    const aboutBottom = document.getElementById('aboutUs').offsetTop + document.getElementById('aboutUs').offsetHeight

    targetLine > homeTop && targetLine < homeBottom ? links[0].classList.add('active') : links[0].classList.remove('active')
    targetLine > servicesTop && targetLine < servicesBottom ? links[1].classList.add('active') : links[1].classList.remove('active')
    targetLine > aboutTop && targetLine < aboutBottom ? links[2].classList.add('active') : links[2].classList.remove('active')
}

function onScroll() {
    showNavOnScroll()
    showBackToTopOnScroll()
    activeMenuAtCurrentSection()
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