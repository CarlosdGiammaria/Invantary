import { Inventory } from "./inventory.js";
import { ShoppingCart } from "./shoppingCart.js";
import { INVENTARIO } from "./data.js";

const btnCart = document.querySelector(".js-btn-cart");
const cartList = document.querySelector(".js-cart-list");
const productsList = document.querySelector(".js-products-list");
const btnExit = document.querySelector(".js-btn-exit");

const inventary = new Inventory(INVENTARIO);
const cart = new ShoppingCart();

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(inventary.getInventory());

  btnCart.addEventListener("click", (event) => {
    event.preventDefault();
    const ap = document.querySelector(".js-cart");
    ap.classList.toggle("speed-in");
  });

  btnExit.addEventListener("click", (event) => {
    event.preventDefault();
    const ap = document.querySelector(".js-cart");
    ap.classList.remove("speed-in");
  });

  productsList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("js-btn-add-product")) {
      const id = target.dataset.productId;
      const product = inventary.getProductById(parseInt(id));

      const isAdded = cart.addProductCart(product, 1);

      /*  console.log("isAdded", isAdded);  */
      console.log("cart.getShoppingCart()", cart.getShoppingCart());
    }
  });
});

function renderProducts(products = []) {
  products.forEach((product) => {
    productsList.innerHTML += `
      <li class="products__product js-product-item">
        <div class="product__card">
          <div class="products__img">
            <img src="${product.image}" />
            <div class="products__actions">
              <button class="btn btn--full btn--success js-btn-add-product"  data-product-id="${product.id}">
                    Add to Cart  <i class="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div class="product__info">
            <span>${product.name}</span>
            <span><i class="fa-solid fa-boxes-stacked"></i> ${product.quantity}</span>
            <span><i class="fa-regular fa-money-bill-1"></i> ${product.price}</span>
          </div>
        </div>
      </li>
    `;
  });
}
