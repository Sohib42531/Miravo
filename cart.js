const prices = {
  1: 149,
  2: 299,
  3: 449,
  4: 599,
  5: 745,
  6: 895,
  7: 1099,
  8: 1199,
  9: 1339,
  10: 1499
};

let quantity = 1;

const quantityEl = document.getElementById("quantity");
const subtotalEl = document.getElementById("subtotal");
const totalEl = document.getElementById("total");

function updateCart() {
    quantityEl.innerText = quantity;

    let price = prices[quantity];

    subtotalEl.innerText = "₹" + price;
    totalEl.innerText = "₹" + price;
}

function increaseQty() {
    if (quantity < 10) {
        quantity++;
        updateCart();
    }
}

function decreaseQty() {
    if (quantity > 1) {
        quantity--;
        updateCart();
    }
}

window.onload = function () {
    updateCart();
};
