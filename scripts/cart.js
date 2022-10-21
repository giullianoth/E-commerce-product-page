const basketList = document.querySelector(".j_basket_list");
const basketCart = document.querySelector(".j_basket_cart");

let qtProducts = 0;

const quantityTag = () => {
    let qtTag = document.createElement("span");
    qtTag.className = "j_basket_count";
    
    if (qtProducts === 0) {
        return null;
    }

    qtTag.innerText = qtProducts;
    return qtTag;
}

const createProduct = (product, quantity, total) => {
    let productElement = document.createElement("div");
    let productImgElement = document.createElement("div");
    let productImg = document.createElement("img");
    let productDescElement = document.createElement("div");
    let productDescName = document.createElement("p");
    let productPriceInfo = document.createElement("p");
    let productPrice = document.createElement("span");
    let productQt = document.createElement("span");
    let productTotal = document.createElement("span");
    let productDelete = document.createElement("div");
    let productDeleteIcon = document.createElement("i");
    
    productElement.className = "main_header_content_basket_list_product j_basket_product";
    productImgElement.className = "main_header_content_basket_list_product_img";
    productImg.src = product.img;
    productImg.setAttribute("alt", product.name);
    productDescElement.className = "main_header_content_basket_list_product_desc";
    productDescName.innerText = product.name;
    productPrice.className = "j_basket_product_price";
    productPrice.innerText = product.price;
    productQt.className = "j_basket_product_qt";
    productQt.innerText = quantity;
    productTotal.className = "main_header_content_basket_list_product_desc_total j_basket_product_total";
    productTotal.innerText = total;
    productDelete.className = "main_header_content_basket_list_product_delete j_basket_delete";
    productDeleteIcon.className = "fa-solid fa-trash-can";
    productDeleteIcon.setAttribute("title", "Delete this item");

    productPriceInfo.append(`$${productPrice.innerHTML}.00 x ${productQt.innerHTML} $${productTotal.innerHTML}.00`);
    productDelete.append(productDeleteIcon);

    productImgElement.append(productImg);
    productDescElement.append(productDescName);
    productDescElement.append(productPriceInfo);

    productElement.append(productImgElement);
    productElement.append(productDescElement);
    productElement.append(productDelete);

    qtProducts = quantity;

    return productElement;
}

const createCheckout = () => {
    let buttonArea = document.createElement("div");
    let button = document.createElement("button");

    buttonArea.className = "main_header_content_basket_list_checkout";
    button.innerText = "Checkout";

    buttonArea.append(button);

    return buttonArea;
}

const generateProducts = () => {
    let product = {
        img: "images/image-product-1-thumbnail.jpg",
        name: "Fall Limited Edition Sneakers",
        price: 125
    }
    let qt = 3;
    let total = product.price * qt;

    basketList.querySelector(".j_basket_list_empty").remove();
    basketList.append(createProduct(product, qt, total));
    basketList.append(createCheckout());

    if (qtProducts > 0) {
        basketCart.append(quantityTag());
    }
}

const cart = () => {
    generateProducts();

    let basketListProducts = basketList.querySelectorAll(".j_basket_product");
    
    basketListProducts.forEach((item) => {
        let deleteProduct = item.querySelector(".j_basket_delete");
        console.log(item.querySelector(".j_basket_product_qt"));

        deleteProduct.addEventListener("click", () => {
            // item.remove();
        })
    })
}

export default cart;