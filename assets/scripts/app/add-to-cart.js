import { addProductQt, btnPurchase, buttonQtMinus, buttonQtPlus, cartInfo, cartList, listItems, productName, productNameElement, productPrice, productPriceElement, productQt, productTotal, qtArea, setProductName, setProductprice, showQuantity, substractProductQt } from "../variables.js"

const emptyCartElement = () => {
    
}

const checkOutElement = () => {

}

const cartListItemsElement = (listItem) =>  {
    let list = listItems;

    if (!list) {
        list = document.createElement("div");
        list.className = "sneakers_header_content_profilenav_basket_list_info_items j_list_items";
    }

    let item = document.createElement("article")
    item.className = "sneakers_header_content_profilenav_basket_list_info_item j_list_item"

    item.innerHTML = `
        <div class="sneakers_header_content_profilenav_basket_list_info_item_image">
        <img src="assets/images/image-product-1-thumbnail.jpg" alt="${listItem.name}">
        </div>

        <header class="sneakers_header_content_profilenav_basket_list_info_item_title">
        <h3>${listItem.name}</h3>
        <p><span class="price">${listItem.price}</span> x <span class="quantity">${listItem.quantity}</span> <span class="total">${listItem.total}</span></p>
        </header>

        <div class="sneakers_header_content_profilenav_basket_list_info_item_action" title="Delete this item">
        <i class="fa-solid fa-trash-can"></i>
        </div>
    `;

    list.append(item);

    return list.outerHTML;
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

        cartList.push({
            name: productName,
            quantity: productQt,
            price: productPrice.toFixed(2),
            total: productTotal().toFixed(2)
        })

        cartList.forEach((item) => {
            cartInfo.innerHTML = cartListItemsElement(item);
            console.log(cartInfo);
        })
    })
}