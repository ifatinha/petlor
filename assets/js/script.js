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

/** modal */

//open modal
const btnModal = document.querySelector("#btnModal");
const movieModal = document.querySelector("#movieModal");

function openModal() {
    movieModal.style.display = "flex";
}

btnModal.addEventListener("click", openModal);

//close modal
const btnCloseModal = document.querySelector("#btnCloseModal");
btnCloseModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});

function closeModal(ev) {
    if (ev.target === movieModal) {
        movieModal.style.display = "none";
    }
}

window.addEventListener("click", closeModal);