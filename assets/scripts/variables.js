const isVisible = (element) => window.getComputedStyle(element).display !== "none";
const elementsCloseClickingOut = () => document.querySelectorAll(".j_closebyclickingout");

const layoutMobile = 375;
const layoutDesktop = 1440;

const breakpointMobile = 480;
const breakpointMobileLandscape = 600;
const breakpointTablet = 768;
const breakpointTabletLandscape = 900;
const breakpointDesktopSD = 1024;
const breakpointDesktopHD1 = 1366;
const breakpointDesktopHD2 = layoutDesktop;
const breakpointDesktopFHD = 1920;

const transitionDuration = 300;
const transitionGap = 10;
const transitionProperties = (property = "all", duration = `${transitionDuration}ms`, timingFunction = "ease", delay = "0s") => `${property} ${duration} ${timingFunction} ${delay}`;

const windowWidth = () => window.innerWidth;
const windowHeight = () => window.innerHeight;
const windowScrollPosition = () => window.scrollY;

const headerElement = () => document.querySelector(".j_header");
const mainContentElement = () => document.querySelector(".j_main_content");

const headerHeight = () => headerElement().offsetHeight;

const menuIcon = document.querySelector(".j_menuicon");
const menuLightbox = document.querySelector(".j_menu_lightbox");
const mobileMenu = document.querySelector(".j_mobile_menu");
const btnDropdown = document.querySelectorAll(".j_dropdown");
const submenu = (item) => item.querySelector(".j_submenu");
const isMobileSubmenu = (element) => window.getComputedStyle(element).position === "static";

const cartIcon = document.querySelector(".j_cart_icon");
const cartList = document.querySelector(".j_cart_list");

export {
    isVisible, elementsCloseClickingOut,
    
    layoutMobile, layoutDesktop, breakpointMobile, breakpointMobileLandscape, breakpointTablet, breakpointTabletLandscape, breakpointDesktopSD, breakpointDesktopHD1, breakpointDesktopHD2, breakpointDesktopFHD,
    
    transitionDuration, transitionGap, transitionProperties,
    
    windowWidth, windowHeight,

    windowScrollPosition,

    headerElement, mainContentElement,
    headerHeight,

    menuIcon, menuLightbox, mobileMenu, btnDropdown, submenu, isMobileSubmenu,

    cartIcon, cartList,
}