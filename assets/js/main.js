import { initializeMenu } from "./modules/burger.js"
import { activeStick } from "./modules/stick.js";
import { openAccordion } from "./modules/accordion.js";
import { openVideo } from "./modules/videoModal.js";
import { openImage } from "./modules/gallery.js";
import { activeLinkSection } from "./modules/activeLinkSection.js";
import { activeLinksMobile } from "./modules/activeLinkMobile.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeMenu();
    activeStick();
    openAccordion();
    openVideo();
    openImage();
    activeLinkSection();
    activeLinksMobile();
})