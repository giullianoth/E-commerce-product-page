import { slideUp } from "../effects.js";
import { cartInfo, count, countElement, deleteItemList, listItem, listItems, substractCount, transitionDuration } from "../variables.js"

const emptyCartElement = () => {
    let empty = document.createElement("p");
    empty.className = "empty j_empty_list";
    empty.innerText = "Your cart is empty.";
    return empty;
}

export const RemoveFromCart = () => {
    deleteItemList().forEach((item, index) => {
        item.addEventListener("click", (event) => {
            listItem().forEach((i) => parseInt(i.dataset.id) === parseInt(item.dataset.id) && slideUp(i, true));

            setTimeout(() => {
                substractCount();
                countElement().innerText = count;

                if (listItem().length === 0) {
                    listItems().remove();
                    document.querySelector(".j_checkout").remove();
                    cartInfo.innerHTML = emptyCartElement().outerHTML;
                    countElement().remove();
                }
            }, transitionDuration);
        })
    })
}