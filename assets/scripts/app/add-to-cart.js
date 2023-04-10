import { fadeIn } from "../effects.js";
import { addCount, addProductQt, addedElement, btnPurchase, buttonQtMinus, buttonQtPlus, cartIcon, cartInfo, cartList, count, countElement, listItems, productName, productNameElement, productPrice, productPriceElement, productQt, productTotal, qtArea, setProductName, setProductprice, showQuantity, substractProductQt, transitionProperties } from "../variables.js"
import { RemoveFromCart } from "./remove-from-cart.js";

const addCountElement = () => {
    if (countElement()) {
        countElement().remove();
    }

    let countSpan = document.createElement("span");
    countSpan.className = "notification_count j_count";
    countSpan.innerText = count;
    return countSpan;
}

const checkOutElement = () => {
    let checkout = document.createElement("a");
    checkout.className = "sneakers_header_content_profilenav_basket_list_info_checkout sneakers_button j_checkout";
    checkout.innerText = "Checkout";
    return checkout;
}

const confirmElement = () => {

    if (addedElement()) {
        addedElement().remove();
    }

    let confirm = document.createElement("div");
    confirm.className = "sneakers_added sneakers_button j_added";
    confirm.innerText = "Added to cart.";
    return confirm;
}

const confirmMessage = () => {
    confirm = confirmElement()
    document.body.prepend(confirm);
    fadeIn(confirm);

    setTimeout(() => {
        confirm.style.transition = transitionProperties("all", "1000ms");
        confirm.style.opacity = 0;

        setTimeout(() => {
            confirm.remove();
        }, 1000);
    }, 2000);
}

const cartListItemsElement = (itemToInsert) => {
    let list = listItems() ?? document.createElement("div");
    list.className = "sneakers_header_content_profilenav_basket_list_info_items j_list_items";

    let item = document.createElement("article")
    item.className = "sneakers_header_content_profilenav_basket_list_info_item j_list_item";
    item.setAttribute("data-id", cartList.length);

    item.innerHTML = `
        <div class="sneakers_header_content_profilenav_basket_list_info_item_image">
        <img src="assets/images/image-product-1-thumbnail.jpg" alt="${itemToInsert.name}">
        </div>

        <header class="sneakers_header_content_profilenav_basket_list_info_item_title">
        <h3>${itemToInsert.name}</h3>
        <p><span class="price">$${itemToInsert.price}</span> x <span class="quantity">${itemToInsert.quantity}</span> <span class="total">$${itemToInsert.total}</span></p>
        </header>

        <div class="sneakers_header_content_profilenav_basket_list_info_item_action j_delete" title="Delete this item" data-id="${cartList.length}">
        <i class="fa-solid fa-trash-can"></i>
        </div>
    `;

    list.append(item)

    return list;
}

export const AddToCart = () => {
    addProductQt(parseInt(qtArea.innerText));
    setProductName(productNameElement.innerText);
    setProductprice(parseFloat(productPriceElement.innerText));

    buttonQtMinus.addEventListener("click", () => {
        if (productQt > 1) {
            substractProductQt(1);
            showQuantity();
        }
    })
    buttonQtPlus.addEventListener("click", () => {
        addProductQt(1);
        showQuantity();
    })

    btnPurchase.addEventListener("click", (event) => {
        event.preventDefault();

        let newItem = {
            name: productName,
            quantity: productQt,
            price: productPrice.toFixed(2),
            total: productTotal().toFixed(2)
        }

        cartList.push(newItem);
        cartInfo.innerHTML = cartListItemsElement(newItem).outerHTML;
        cartList.length > 0 && cartInfo.append(checkOutElement());

        addCount();
        cartIcon.append(addCountElement());

        confirmMessage();
        RemoveFromCart();
    })
}