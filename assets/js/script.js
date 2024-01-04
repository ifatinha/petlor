/** open menu mobile */
const menuMobile = document.querySelector(".menu-mobile");
const sidenav = document.querySelector(".overlay");

function openMenu(ev) {
    ev.currentTarget.classList.toggle("change");

    if (sidenav.style.maxHeight) {
        sidenav.style.maxHeight = null;
    } else {
        sidenav.style.maxHeight = sidenav.scrollHeight + "px";
    }
}

menuMobile.addEventListener("click", openMenu);

/** stick menu */
function activeStick() {
    if (scrollY > stick) {
        navbar.classList.add("stick", "header-menu-bg");
    } else {
        navbar.classList.remove("stick", "header-menu-bg");
    }
}

window.onscroll = function () { activeStick() }
const navbar = document.querySelector(".header-menu");
const stick = navbar.offsetTop;

/** active menu */
// const linksMenu = document.querySelectorAll(".header-navbar li");

// function activeLinks(link) {
//     link.addEventListener("click", () => {
//         link.classList.add("link-active");
//     })

//     linksMenu.forEach((li) => {
//         li.classList.remove("link-active");
//     })
// }

// linksMenu.forEach(activeLinks);