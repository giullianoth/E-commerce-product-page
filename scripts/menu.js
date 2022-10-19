import { fadeIn, fadeOut } from "./effects.js";

const menuHambIcon = document.querySelector(".j_hamb_icon");
const menuArea = document.querySelector(".j_menu_area");
const menuDropDown = document.querySelectorAll(".j_dropdown");

let headerHeight = document.querySelector(".j_main_header").offsetHeight;

const toggleMobileMenu = () => {
    menuHambIcon.style.height = `${headerHeight}px`;
    menuHambIcon.classList.toggle("active");

    if (menuHambIcon.classList.contains("active")) {
        menuHambIcon.querySelector("i").classList.add("fa-xmark");
        menuHambIcon.querySelector("i").classList.remove("fa-bars");

        fadeIn(menuArea);
        menuArea.querySelector(".menu").style.left = "0";
    } else {
        menuHambIcon.querySelector("i").classList.remove("fa-xmark");
        menuHambIcon.querySelector("i").classList.add("fa-bars");

        fadeOut(menuArea);
        menuArea.querySelector(".menu").style.left = "";
    }
}

const dropDownMobile = () => {
    menuDropDown.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();

            let submenu = item.querySelector(".submenu");

            if (window.getComputedStyle(submenu).height === "0px") {
                submenu.style.display = "block";
                submenu.style.height = "auto";
            } else {
                submenu.style.height = "";
                submenu.style.display = "";
            }
        })
    })
}

const resetMenu = () => {
    if (window.innerWidth > 890) {
        menuArea.style.display = "block";
        menuArea.style.opacity = "1";
        menuHambIcon.querySelector("i").classList.remove("fa-xmark");
        menuHambIcon.querySelector("i").classList.add("fa-bars");
        menuHambIcon.classList.remove("active");
    } else {
        if (!menuHambIcon.classList.contains("active")) {
            menuArea.style.display = "";
            menuArea.style.opacity = "";
        }
    }
}

const mobileMenu = () => {

    menuHambIcon.addEventListener("click", toggleMobileMenu);

    if (window.innerWidth <= 890) {
        dropDownMobile();
    }

    window.onresize = () => {
        resetMenu();

        if (window.innerWidth <= 890) {
            dropDownMobile();
        }
    }
}

export default mobileMenu;