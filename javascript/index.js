import { Inventory } from "./inventory.js";
import { ShoppingCart } from "./shoppingCart.js";
import {
  INVENTARIO,
  HOME_CATEGORY,
  PERSONAL_USE_CATEGORY,
  FOOD_CATEGORY,
} from "./data.js";

const btnCart = document.querySelector(".js-btn-cart");
const cartList = document.querySelector(".js-cart-list");
const productsList = document.querySelector(".js-products-list");
const btnExit = document.querySelector(".js-btn-exit");
const showCategories = document.querySelector(".js-show-categories");
const navigation = document.querySelector(".js-navigation");
const totalPrice = document.querySelector(".js-total-price");
const btnBuy = document.querySelector(".js-btn-buy");
const counter = document.querySelector(".js-counter");

const inventary = new Inventory(INVENTARIO);
const cart = new ShoppingCart();

const CATEROGORY_MAP = {
  [HOME_CATEGORY]: "Home",
  [PERSONAL_USE_CATEGORY]: "Personal Use",
  [FOOD_CATEGORY]: "Food",
};

const store = killa.createStore({ count: 0 });

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(inventary.getInventory());
  renderCategories(inventary.getCategories());

  store.subscribe(
    (state) => {
      counter.textContent = `${state.count}`;
    },
    (state) => state.count
  );

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

  btnBuy.addEventListener("click", (e) => {
    e.preventDefault();
    productsList.innerHTML = "";

    cart.buy((cart) => {
      return cart.products.every((product) => {
        return inventary.deleteQuantity(product.id, product.quantity);
      });
    });
    renderCounter(cart.getItems());
    showCart(cart.getShoppingCart());

    renderProducts(inventary.getInventory());
  });

  showCategories.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const filter = target.dataset.filter;

    if (target.classList.contains("js-category") && filter) {
      productsList.innerHTML = "";
      let products = [];

      if (filter === "ALL") {
        products = inventary.getInventory();
      } else {
        products = inventary.getProductsByCategory(filter);
      }
      renderProducts(products);
    }
  });

  productsList.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const ap = document.querySelector(".js-cart");

    if (target.classList.contains("js-btn-add-product")) {
      const id = target.dataset.productId;
      const product = inventary.getProductById(parseInt(id));

      cart.addProductCart(product, 1);
    }
    showCart(cart.getShoppingCart());
    renderCounter(cart.getItems());
  });

  cartList.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    const parent = target.closest(".js-cart-item");

    if (parent) {
      const id = parent.dataset.id;
      const product = inventary.getProductById(parseInt(id));
      if (target.classList.contains("js-add-quntity")) {
        cart.addProductCart(product, 1);
        renderCounter(cart.getItems());
      }

      if (target.classList.contains("js-delete-quntity")) {
        cart.deleteQuantityById(product.id, 1);
        renderCounter(cart.getItems());
      }
    }

    showCart(cart.getShoppingCart());
  });
});

function renderCounter(count) {
  store.setState(() => {
    return {
      count,
    };
  });
}

function showPrice() {
  const total = cart.totalPrice();
  totalPrice.textContent = `$ ${total}`;
}

function showCart(products = []) {
  const productsTemplate = products.reduce((acc, cur) => {
    const template = `
        <li class="list__items">
          <div class="shopping-cart__card js-cart-item" data-id="${cur.id}">
            <div class="card__img">
              <img src="${cur.image}" alt=""/>
            </div>
            <div class="card__details">
              <span>${cur.name}</span>
              <span><i class="fa-regular fa-money-bill-1"></i> ${cur.price}</span>
              <span><i class="fa-solid fa-boxes-stacked"></i> ${cur.quantity}</span>
              <div class="product__action">
                <button class="btn js-add-quntity">
                  <i class="fa-solid fa-circle-plus icon"></i>
                </button>
                <button class="btn js-delete-quntity">
                  <i class="fa-solid fa-circle-minus icon"></i>
                </button>
              </div>
            </div>
          </div>
        </li>
        
      `;

    return (acc += template);
  }, "");

  cartList.innerHTML = productsTemplate;
  showPrice();
}

function renderCategories(categories = []) {
  categories.forEach((category) => {
    showCategories.innerHTML += `
      <li>
        <a href="" class="list__item js-category" data-filter="${category}">${CATEROGORY_MAP[category]}</a>
      </li>
    `;
  });

  navigation.classList.remove("hide");
}

function renderProducts(products = []) {
  products.forEach((product) => {
    productsList.innerHTML += `
      <li class="products__product js-product-item">
        <div class="product__card">
          <div class="products__img">
            <img src="${product.image}" />
            <div class="products__actions">
              <button class="btn btn--full btn--success js-btn-add-product" data-product-id="${product.id}">
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
