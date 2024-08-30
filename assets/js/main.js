import { initializeMenu } from "./modules/burger.js"
import { activeStick } from "./modules/stick.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeMenu();
    activeStick();
})