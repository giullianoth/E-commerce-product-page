const header = document.querySelector(".j_header");
const mainContent = document.querySelector(".j_main_content");

mainContent.style.marginTop = `${header.offsetHeight}px`;

console.log(header.offsetHeight);