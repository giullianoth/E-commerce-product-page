import { cartInfo, deleteItemList, listItem, listItems } from "../variables.js"

const emptyCartElement = () => {
    let empty = document.createElement("p");
    empty.className = "empty j_empty_list";
    empty.innerText = "Your cart is empty.";
    return empty;
}

export const RemoveFromCart = () => {
    deleteItemList().forEach((item, index) => {
        item.addEventListener("click", (event) => {
            
            console.log(listItem(), listItems());
            listItem()[index].remove();

            if (listItem().length === 0) {
                listItems().remove();
                document.querySelector(".j_checkout").remove();
                cartInfo.innerHTML = emptyCartElement().outerHTML;
            }
        })
    })
}