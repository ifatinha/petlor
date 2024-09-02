import { setupModalToggle } from "./modal.js"

export function openImage() {
    const buttons = document.querySelectorAll(".gallery__card a");
    const closeBtn = document.querySelector("#closeGalleryModal");
    const modal = document.querySelector("#img-modal");
    const imageModal = document.querySelector("#modalImg");
    const path = "assets/images/";

    const handleButtonClick = (button) => {
        const imagePath = `${path}${button.dataset.gallery}.jpg`;

        button.addEventListener("click", () => {
            imageModal.setAttribute("src", imagePath);
        });

        setupModalToggle(button, modal);
    }

    buttons.forEach(handleButtonClick);
    setupModalToggle(closeBtn, modal);
}