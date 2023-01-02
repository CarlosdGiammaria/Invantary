import { Inventario } from "./inventory.js";
import { ShoppingCart } from "./shoopingCart.js";
import {
  INVENTARIO,
  HOME_CATEGORY,
  FOOD_CATEGORY,
  PERSONAL_USE_CATEGORY,
} from "./data.js";

const inventary = new Inventario(INVENTARIO);


const cart = new ShoppingCart();
const products = [1, 2, 2, 1,2,2];
products.forEach((id) => {
  const product = inventary.getProductById(id);
  cart.addProductoCart(product, 1);
});

