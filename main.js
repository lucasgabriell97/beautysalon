/*======== Abrir e fechar o menu ao clicar nos ícones =======*/ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    }) 
}

/*======== Fechar o menu ao clicar nos links =======*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/*======== Colocar sombra no header ao dar scroll =======*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/*======== Testimonials carousel slider swiper =======*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/*======== ScrollReveal: Mostrar elementos quando rolar a pag =======*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
    `, 
    {interval: 100}
)

/*======== Botão voltar para o topo =======*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

window.addEventListener('scroll', function() {
    
})

/*======== Menu ativo conforme a seção visível na página ========*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections ) {
        const sectionTop = section.offsetTop 
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop 
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

/*======== When Scroll ========*/
window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})
