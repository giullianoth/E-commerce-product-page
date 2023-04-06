import { CloseByClickingOut } from "../close-by-clicking-out.js";
import { fadeIn, fadeInToDown, fadeOut, fadeOutToUp, slideDown, slideUp } from "../effects.js";
import { breakpointTabletLandscape, btnDropdown, cartIcon, cartList, headerElement, headerHeight, isMobileSubmenu, isVisible, mainContentElement, menuIcon, menuLightbox, mobileMenu, submenu, transitionDuration, windowScrollPosition, windowWidth } from "../variables.js";

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
        cartList.classList.contains("active") && fadeOutToUp(cartList);

        cartList.classList.toggle("active");
    })

    btnDropdown.forEach((btn, i, arr) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            let submenuElement = submenu(btn.parentNode);
            
            arr.forEach((element) => {
                if (element !== btn) {
                    element.classList.remove("active");
                    submenu(element.parentNode).classList.remove("active");
                    !isMobileSubmenu(submenu(element.parentNode)) && fadeOutToUp(submenu(element.parentNode));
                    isMobileSubmenu(submenu(element.parentNode)) && slideUp(submenu(element.parentNode));
                } else {
                    if (isMobileSubmenu(submenuElement)) {
                        !submenuElement.classList.contains("active") && slideDown(submenuElement);
                        submenuElement.classList.contains("active") && slideUp(submenuElement);
                    } else {
                        !submenuElement.classList.contains("active") && fadeInToDown(submenuElement, true);
                        submenuElement.classList.contains("active") && fadeOutToUp(submenuElement);
                    }

                    submenuElement.classList.toggle("active");
                    btn.classList.toggle("active");
                }
            })
        })
    })
}