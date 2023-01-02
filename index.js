import { Inventario } from "./inventory.js";
import { ShoppingCart } from "./shoopingCart.js";
import {
  INVENTARIO,
  HOME_CATEGORY,
  FOOD_CATEGORY,
  PERSONAL_USE_CATEGORY,
} from "./data.js";

const inventary = new Inventario(INVENTARIO);
// console.log(inventary.getProductById(1))
// console.log(inventary.getProductsByCategory(HOME_CATEGORY));
// console.log(inventary.addQuantity(2,4))
// console.log(inventary. deleteQuantity(2,1))
// console.log(inventary.updateProduct(1,{name:'clorox',}))
// console.log(inventary.getProductById(1))
// console.log(inventary.deleteProduct(1))
// console.log(inventary.getInventory())
// console.log(inventary.addInventory(INVENTARIO)nos está jodiendo la felicidad)
// console.log(inventary.addInventory(inventory))

const cart = new ShoppingCart();
const products = [1, 2, 2, 1,2,2];
products.forEach((id) => {
  const product = inventary.getProductById(id);
  cart.addProductoCart(product, 1);
});
// console.log(cart.getShoppingCart())
// console.log(cart.deleteQuantityById(1,2))
// console.log(cart.precioTotal());
console.log(cart.getShoppingCart());
console.log(cart. precioTotal())