/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");

    const sidenav = document.querySelector(".overlay");
    if (sidenav.style.maxHeight) {
        sidenav.style.maxHeight = null;
    } else {
        sidenav.style.maxHeight = sidenav.scrollHeight + "px";
    }
}

menuMobile.addEventListener("click", openMenu);

/** stick menu */
// function activeStick() {
//     if (window.scrollY >= stick) {
//         console.log(window.scrollY);
//         navbar.classList.add("stick");
//     } else {
//         navbar.classList.remove("stick");
//     }
// }

// window.onscroll = function () { activeStick() }
// const navbar = document.querySelector(".header-menu");
// const stick = navbar.offsetTop;

/** active menu */
const linksMenu = document.querySelectorAll(".header-navbar li a");

function activeLink(link, index) {

    link.addEventListener("click", () => {
        link.parentElement.classList.add("link-active");

        linksMenu.forEach((item, i) => {
            if (i !== index) {
                item.parentElement.classList.remove("link-active");
            }
        })
    });
}

linksMenu.forEach(activeLink);

/** accordion section faq */
const buttonsAccordion = document.querySelectorAll(".faq-accordion-btn");

function openAccordion(ev) {
    const button = ev.currentTarget;
    button.classList.toggle("accordion-active");
    const panel = button.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

buttonsAccordion.forEach((button) => {
    button.addEventListener("click", openAccordion);
});

/** OwlCarousel */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            998: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
});

/** modal functions */

function openModal(element) {
    element.style.display = "flex";
}

function closeModal(element) {
    element.style.display = "none";
}

//open modal video
const btnMovieModal = document.querySelector("#btnMovieModal");
const movieModal = document.querySelector("#movieModal");

btnMovieModal.addEventListener("click", () => {
    openModal(movieModal);
});

//close modal
const btnCloseModal = document.querySelector("#modalVideoClose");
btnCloseModal.addEventListener("click", () => {
    closeModal(movieModal);
});

/** modal gallery */
const galleryModal = document.querySelector("#galleryModal");
const linksImages = document.querySelectorAll(".gallery-card a");
const imgModalOpen = document.querySelector("#imgModalOpen");
const path = "assets/images/";

linksImages.forEach((link) => {
    link.addEventListener("click", () => {
        imgModalOpen.setAttribute("src", `${path}${link.getAttribute("id")}.jpg`);
        openModal(galleryModal);
    })
})

const btnCloseGalleryModal = document.querySelector("#modalImgClose");
btnCloseGalleryModal.addEventListener("click", () => {
    closeModal(galleryModal);
});

/** close modal window */
function closeModalWindow(ev) {
    if (ev.target === movieModal) {
        movieModal.style.display = "none";
    } else if (ev.target === galleryModal) {
        galleryModal.style.display = "none";
    }
}

window.addEventListener("click", closeModalWindow);

