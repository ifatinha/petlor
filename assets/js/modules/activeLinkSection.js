export function activeLinkSection() {
    const sections = document.querySelectorAll("[data-section]");
    const links = document.querySelectorAll("#navbar li");

    const isElementVisible = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        const elementHeight = rect.height;
        const elementWidth = rect.width;

        const vertVisible = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const horVisible = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

        const vertPercentVisible = (vertVisible / elementHeight) * 100;
        const horPercentVisivble = (horVisible / elementWidth) * 100;

        return ((vertPercentVisible >= 40) && horPercentVisivble >= 40);
    }

    const updateActiveLink = () => {
        let activated = false;

        sections.forEach((section, index) => {
            if (!activated && isElementVisible(section)) {
                links.forEach(link => link.classList.remove("activated"));
                links[index].classList.add("activated");
                activated = true
            }
        })
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
}