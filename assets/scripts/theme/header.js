import { fadeIn, fadeInToDown, fadeOut, fadeOutToUp, slideDown, slideUp } from "../effects.js";
import { breakpointTabletLandscape, btnDropdown, headerElement, headerHeight, isMobileSubmenu, mainContentElement, menuIcon, menuIsActive, menuLightbox, mobileMenu, submenus, transitionDuration, windowScrollPosition, windowWidth } from "../variables.js";

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

    btnDropdown.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            submenus.forEach((sub) => {
                if (submenus[index] !== sub ) {
                    !isMobileSubmenu(submenus[index]) && fadeOutToUp(sub);
                    isMobileSubmenu(submenus[index]) && slideUp(sub);
                    sub.classList.remove("active");
                }
            })

            submenus[index].classList.toggle("active");

            if (isMobileSubmenu(submenus[index])) {
                menuIsActive(submenus[index]) && slideDown(submenus[index]);
                !menuIsActive(submenus[index]) && slideUp(submenus[index]);
            } else {
                menuIsActive(submenus[index]) && fadeInToDown(submenus[index],);
                !menuIsActive(submenus[index]) && fadeOutToUp(submenus[index]);
            }
        })
    })
}