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
//console.log(inventary.addQuantity(2,1))
//console.log(inventary. deleteQuantity(2,1))
// console.log(inventary.updateProduct(1,{name:'clorox',}))
// console.log(inventary.getProductById(1))
// console.log(inventary.deleteProduct(1))


const cart = new ShoppingCart();
console.log(inventary. getInventory())
const products = [2,2,2,2,2,2,2,2,2,2,2,2,];
products.forEach((id) => {
  const product = inventary.getProductById(id);
  cart.addProductCart(product, 1);
});
//este console es para comprobar que reste la cantidad que se ingreasa al carrito
console.log(inventary. getInventory())

console.log(cart.getShoppingCart())
// console.log(cart. deleteQuantityById());
//console.log(cart.clearCart())
// console.log(cart. precioTotal())
