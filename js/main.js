const burgerMenu = document.querySelector('#burger-menu')
const burgerButton = document.querySelector('#burger-button')

if (burgerMenu && burgerButton) {
    burgerButton.addEventListener('click', ()=>{
        burgerButton.classList.toggle('active')

        if (burgerButton.classList.contains('active')) {
            burgerMenu.classList.add('active')
        } else {
            burgerMenu.classList.remove('active')            
        }
    })
}


// 1240
const swiperMain = new Swiper(".support-section__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        850: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});


const swiperNews = new Swiper(".news-section__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1240: {
            slidesPerView: 3,
            centeredSlides: true,
        },
        850: {
            slidesPerView: 2,
            centeredSlides: false,
        }
    }
});