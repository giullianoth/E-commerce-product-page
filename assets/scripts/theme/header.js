import { fadeIn, fadeInToDown, fadeOut, fadeOutToUp } from "../effects.js";
import { breakpointTabletLandscape, cartIcon, cartList, headerElement, headerHeight, mainContentElement, menuIcon, menuLightbox, mobileMenu, transitionDuration, windowScrollPosition, windowWidth } from "../variables.js"

export const Header = () => {
    mainContentElement().style.marginTop = `${headerHeight()}px`;

    window.addEventListener("scroll", () => {
        if (windowScrollPosition() > 0 && windowWidth() <= breakpointTabletLandscape) {
            headerElement().style.paddingTop = "6px";
            headerElement().style.paddingBottom = "6px";
        } else if (windowScrollPosition() === 0 && windowWidth() <= breakpointTabletLandscape) {
            headerElement().style.paddingTop = "";
            headerElement().style.paddingBottom = "";
        }
    })

    menuIcon.addEventListener("click", () => {
        !menuLightbox.classList.contains("active") && fadeIn(menuLightbox, "flex");
        menuLightbox.classList.contains("active") && fadeOut(menuLightbox);
        menuLightbox.classList.toggle("active");

        mobileMenu.style.left = "";
                
        fadeOutToUp(menuIcon);

        setTimeout(() => {
            menuIcon.classList.toggle("fa-bars");
            menuIcon.classList.toggle("fa-xmark");
            fadeInToDown(menuIcon);

            mobileMenu.style.left = 0;
            mobileMenu.classList.toggle("active");
        }, transitionDuration);
    })

    cartIcon.addEventListener("click", () => {
        !cartList.classList.contains("active") && fadeInToDown(cartList, true);
        cartList.classList.contains("active") && fadeOutToUp(cartList, true);

        cartList.classList.toggle("active");
    })
}