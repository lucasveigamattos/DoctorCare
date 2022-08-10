addEventListener('scroll', onScroll)

function showNavOnScroll() {
    const navigation = document.getElementById('navigation')
    scrollY > 0 ? navigation.classList.add('scroll') : navigation.classList.remove('scroll')
}

function showBackToTopOnScroll() {
    const backToTop = document.getElementById('backToTop')

    scrollY > 1000 ? backToTop.classList.add('show') : backToTop.classList.remove('show')
}

function activeMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2
    
    const link = document.querySelector(`#menu a[href*=${section.getAttribute('id')}]`)

    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight

    targetLine > sectionTop && targetLine < sectionBottom ? link.classList.add('active') : link.classList.remove('active')
}

function onScroll() {
    showNavOnScroll()
    showBackToTopOnScroll()

    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(aboutUs)
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