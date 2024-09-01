import { initializeMenu } from "./modules/burger.js"
import { activeStick } from "./modules/stick.js";
import { openAccordion } from "./modules/accordion.js";
import { openVideo } from "./modules/videoModal.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeMenu();
    activeStick();
    openAccordion();
    openVideo();
})