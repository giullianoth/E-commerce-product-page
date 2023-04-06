import { fadeOutToUp, slideUp } from "./effects.js";
import { elementsCloseClickingOut, isMobileSubmenu, isVisible } from "./variables.js"

export const CloseByClickingOut = () => {
    document.body.addEventListener("click", (event) => {
        elementsCloseClickingOut().forEach((element) => {
            if (isVisible(element) && element.classList.contains("active") && element.parentNode !== event.target.parentNode && !event.target.classList.contains("submenu_item")) {
                element.classList.remove("active");
                !isMobileSubmenu(element) && fadeOutToUp(element);
                isMobileSubmenu(element) && slideUp(element);
            }
        })
    })
}