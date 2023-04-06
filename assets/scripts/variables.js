// VIEWPORT
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

// TRANSITION
const transitionDuration = 300;
const transitionGap = 10;
const transitionProperties = (property = "all", duration = `${transitionDuration}ms`, timingFunction = "ease", delay = "0s") => `${property} ${duration} ${timingFunction} ${delay}`;

// WINDOW
const windowWidth = () => window.innerWidth;
const windowHeight = () => window.innerHeight;
const windowScrollPosition = () => window.scrollY;

// HEADER VIEWPORT
const headerElement = () => document.querySelector(".j_header");
const mainContentElement = () => document.querySelector(".j_main_content");

const headerHeight = () => headerElement().offsetHeight;

// MENU
const menuIcon = document.querySelector(".j_menuicon");
const menuLightbox = document.querySelector(".j_menu_lightbox");
const mobileMenu = document.querySelector(".j_mobile_menu");
const btnDropdown = document.querySelectorAll(".j_dropdown");
const submenu = (item) => item.querySelector(".j_submenu");
const isMobileSubmenu = (element) => window.getComputedStyle(element).position === "static";

// CART SECTION
const cartIcon = document.querySelector(".j_cart_icon");
const cartListArea = document.querySelector(".j_cart_list");

// GALLERY
const galleryArea = () => document.querySelector(".j_gallery");
const desactivateGalery = () => galleryArea().classList.remove("j_gallery");
const resetGallery = () => document.querySelector(".j_reset_gallery").classList.add("j_gallery");

const galleryLightboxArea = () => document.querySelector(".j_lightbox");

const galleryImagesExtension = "jpg";
const galleryImagesList = ["image-product-1", "image-product-2", "image-product-3", "image-product-4"];
const galleryThumbsList = galleryImagesList.map((image) => image.split("-").concat(["thumbnail"]).join("-"));
const galleryImagePath = "assets/images";

const galleryFeaturedImage = () => galleryArea().querySelector(".j_featured");

const galleryThumbs = () => galleryArea().querySelectorAll(".j_thumb");

const galleryNavPrev = () => galleryArea().querySelector(".j_nav.prev");
const galleryNavNext = () => galleryArea().querySelector(".j_nav.next");

const getFeaturedImageByElement = () => galleryFeaturedImage().src.substring(galleryFeaturedImage().src.length - 19).replace(".jpg", "");
const getImageIndex = () => galleryImagesList.indexOf(getFeaturedImageByElement());

// CART FEATURES
const buttonQtMinus = document.querySelector(".j_qt_minus");
const buttonQtPlus = document.querySelector(".j_qt_plus");
const qtArea = document.querySelector(".j_qt");
const btnPurchase = document.querySelector(".j_purchase");

const productNameElement = document.querySelector(".j_product_name");
const productPriceElement = document.querySelector(".j_product_price");

const addProductQt = (qt) => productQt += qt;
const substractProductQt = (qt) => productQt -= qt;
const setProductName = (name) => productName = productName ? productName : name;
const setProductprice = (price) => productPrice = productPrice ? productPrice : price;

const showQuantity = () => qtArea.innerText = productQt;

const cartList = [];
const listItems = document.querySelector(".j_list_items");
const listEmpty = document.querySelector(".j_empty_list");
const cartInfo = document.querySelector(".j_cart_info");

var productQt = 0;
var productPrice = 0;
var productTotal = () => productPrice * productQt;
var productName = "";

export {
    isVisible, elementsCloseClickingOut,

    layoutMobile, layoutDesktop, breakpointMobile, breakpointMobileLandscape, breakpointTablet, breakpointTabletLandscape, breakpointDesktopSD, breakpointDesktopHD1, breakpointDesktopHD2, breakpointDesktopFHD,

    transitionDuration, transitionGap, transitionProperties,

    windowWidth, windowHeight,

    windowScrollPosition,

    headerElement, mainContentElement,
    headerHeight,

    menuIcon, menuLightbox, mobileMenu, btnDropdown, submenu, isMobileSubmenu,

    cartIcon, cartListArea,

    galleryArea, desactivateGalery, resetGallery, galleryLightboxArea, galleryImagesExtension, galleryImagesList, galleryThumbsList, galleryImagePath, galleryFeaturedImage, galleryThumbs, galleryNavPrev, galleryNavNext, getFeaturedImageByElement, getImageIndex,

    buttonQtMinus, buttonQtPlus, qtArea, btnPurchase, productNameElement, productPriceElement, addProductQt, substractProductQt, setProductName, setProductprice, showQuantity, cartList, listItems, listEmpty, cartInfo, productQt, productPrice, productTotal, productName,
}