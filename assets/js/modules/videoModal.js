import { setupModalToggle } from "./modal.js";

export function openVideo() {
    const btnOpenModal = document.querySelector("#faqModalOpen");
    const btnCloseModal = document.querySelector("#faqModalClose");
    const faqModal = document.querySelector("#faqModal");

    setupModalToggle(btnOpenModal, faqModal);
    setupModalToggle(btnCloseModal, faqModal);
}