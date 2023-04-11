import { fadeOutToUp, slideUp } from "./effects.js";
import { elementsCloseClickingOut, elementsCloseClickingOutChildren, isMobileSubmenu, isVisible } from "./variables.js"

export const CloseByClickingOut = () => {
    document.body.addEventListener("click", (event) => {
        if (!event.target.classList.contains("j_closebyclickingout") && !event.target.classList.contains("j_dropdown") && !event.target.classList.contains("j_noclosebyclicking")) {
            elementsCloseClickingOut().forEach((element) => {

                if (isVisible(element)) {
                    let children = [];
                    elementsCloseClickingOutChildren(element).forEach((child) => children.push(child));

                    if (!children.some((child) => child === event.target)) {
                        element.classList.remove("active");

                        if (isMobileSubmenu(element)) {

                        } else {
                            isVisible(element) && fadeOutToUp(element);
                        }
                    }
                }
            })
        }
    })
}