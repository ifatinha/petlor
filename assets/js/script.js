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
function activeStick() {
    if (window.scrollY >= stick) {
        console.log(window.scrollY);
        navbar.classList.add("stick");
    } else {
        navbar.classList.remove("stick");
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