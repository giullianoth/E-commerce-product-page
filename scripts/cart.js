const basketList = document.querySelector(".j_basket_list");
const basketCart = document.querySelector(".j_basket_cart");
const btnQuantity = document.querySelectorAll(".j_btn_qt");
const productQuantityElement = document.querySelector(".j_product_qt");
const purchase = document.querySelector(".j_add_product");
const productImage = document.querySelector(".j_product_image");

let productQuantity = parseInt(productQuantityElement.innerText);

const products = [];

const setQuantity = (btn) => {
    if (btn.classList.contains("j_minus") && parseInt(productQuantityElement.innerText) > 1) {
        productQuantity -= 1;
    } else if (btn.classList.contains("j_plus")) {
        productQuantity += 1;
    }

    productQuantityElement.innerText = productQuantity;
}

const setProductList = (product) => {
    let pdtName = document.createElement("p");
    let pdtPrice = document.createElement("span");
    let pdtQuant = document.createElement("span");
    let pdtTotal = document.createElement("strong");
    let pdtImage = document.createElement("img");
    let pdtDelete = document.createElement("i");

    let pdtImgArea = document.createElement("div");
    let pdtDesc = document.createElement("div");
    let pdtDeleteArea = document.createElement("div");
    let pdtPriceArea = document.createElement("p");

    let pdtList = document.createElement("div");

    pdtPrice.className = "price";
    pdtQuant.className = "quantity";
    pdtTotal.className = "total";

    pdtName.innerText = product.name;
    pdtPrice.innerText = `$${product.price}.00`;
    pdtQuant.innerText = product.quantity;
    pdtTotal.innerText = `$${product.total}.00`;
    pdtImage.src = product.image;
    pdtImage.setAttribute("alt", product.name);
    pdtDelete.className = "fa-solid fa-trash-can";
    pdtDelete.setAttribute("title", "Delete this item");
    pdtPriceArea.innerHTML = `${pdtPrice.outerHTML} x ${pdtQuant.outerHTML} ${pdtTotal.outerHTML}`; 

    pdtImgArea.className = "main_header_content_basket_list_product_img";
    pdtDesc.className = "main_header_content_basket_list_product_desc";
    pdtDeleteArea.className = "main_header_content_basket_list_product_delete j_product_delete";

    pdtList.className = "main_header_content_basket_list_product";

    pdtImgArea.innerHTML = pdtImage.outerHTML;
    pdtDesc.innerHTML = pdtName.outerHTML + pdtPriceArea.outerHTML;
    pdtDeleteArea.innerHTML = pdtDelete.outerHTML;

    pdtList.innerHTML = pdtImgArea.outerHTML + pdtDesc.outerHTML + pdtDeleteArea.outerHTML;

    basketList.append(pdtList);
}

const quantityTag = () => {
    let qtProducts = 0;
    let qtTag = document.createElement("span");
    qtTag.className = "j_basket_count";

    products.forEach((item) => {
        qtProducts += item.quantity;
    })

    if (qtProducts === 0) {
        return null;
    }

    qtTag.innerText = qtProducts;
    return qtTag;
}

const createCheckout = () => {
    let buttonArea = document.createElement("div");
    let button = document.createElement("button");

    buttonArea.className = "main_header_content_basket_list_checkout j_basket_checkout";
    button.innerText = "Checkout";

    buttonArea.append(button);

    return buttonArea;
}

const addProduct = () => {
    let productAdded = {
        image: productImage.src,
        name: document.querySelector(".j_product_name").innerText,
        price: parseFloat(document.querySelector(".j_product_price").innerText),
        quantity: parseInt(productQuantityElement.innerText),
        total: null
    }

    productAdded.total = productAdded.price * productAdded.quantity;
    products.push(productAdded);

    if (basketCart.firstElementChild.classList.contains("j_basket_count")) {
        basketCart.firstElementChild.remove();
    }

    basketCart.prepend(quantityTag());

    basketList.innerHTML = "";
    products.forEach((product) => {
        setProductList(product);
    })
    
    basketList.append(createCheckout());
}

const removeProduct = (item, index) => {
    let emptyCartElement = document.createElement("div");
    let emptyCartTextElement = document.createElement("p");
    let pdtQuant = parseInt(item.querySelector(".quantity").innerText);

    emptyCartElement.className = "main_header_content_basket_list_empty j_basket_list_empty";
    emptyCartTextElement.innerText = "Your cart is empty.";

    emptyCartElement.append(emptyCartTextElement);

    let checkoutBtn = basketList.querySelector(".j_basket_checkout");
    let qtTag = basketCart.querySelector(".j_basket_count");
    let qt = parseInt(qtTag.innerText) - pdtQuant;
    qtTag.innerText = qt;

    item.remove();
    products.splice(index, 1);

    if (qt === 0) {
        qtTag.remove();
        checkoutBtn.remove();
        basketList.append(emptyCartElement);
    }
}

const cart = () => {
    purchase.addEventListener("click", () => {
        addProduct();

        if (products.length) {
            let deleteBtn = basketList.querySelectorAll(".j_product_delete");
            
            deleteBtn.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    removeProduct(btn.parentElement, index);
                })
            })
        }
    });

    btnQuantity.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            setQuantity(btn);
        })
    })
}

export default cart;