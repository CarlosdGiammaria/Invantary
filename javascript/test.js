import { Inventory } from "./inventory.js";
import { ShoppingCart } from "./shoppingCart.js";
import {
  INVENTARIO,
  HOME_CATEGORY,
  FOOD_CATEGORY,
  PERSONAL_USE_CATEGORY,
} from "./data.js";

const inventary = new Inventory(INVENTARIO);

//Trae el inventario completo
inventary.getInventory();

//Esto trae un producto por su Id
inventary.getProductById(1);

//Esto trae un producto o productos por categoria
//HOME_CATEGORY, FOOD_CATEGORY , PERSONAL_USE_CATEGORY
inventary.getProductsByCategory(HOME_CATEGORY);

//Agrega a un producto cierta cantidad y la retorna
inventary.addQuantity(2, 1);

//Elimina cierta cantidad a un producto y la retorna
inventary.deleteQuantity(2, 1);

//Actualiza un producto, llamandolo por su Id
//y señalando el key cuyo valor será cambiado

inventary.updateProduct(1, {
  name: "clorox",
  description: "es el hipoclorito de sodio (NaClO)",
});

//Se selecciona el producto por su Id y los saca del Inventario
inventary.deleteProduct(2);

const cart = new ShoppingCart();
//Trae el carrito
console.log(cart.getShoppingCart());

//agrega un producto o productos al carrito
//si, solo si, la cantidad del producto a agregar no está en 0
const products = [1, 2, 2, 2, 2, 2, 2, 2, 3, 4];
console.log(
  products.forEach((id) => {
    const product = inventary.getProductById(id);

    if (product) {
      const success = cart.addProductCart(product, 1);

      if (success) {
        console.log(`Producto agregado: ${product.name}`);
        return;
      }
      console.log(`no hay ${product.name} disponible`);
    }
  })
);

// Disminuye la cantidad de un producto en el carrito
//retorna la cantidad que queda
console.log(cart.deleteQuantityById(2, 1));
console.log(cart.getShoppingCart());
//Calcula todos los precios del carrito
cart.totalPrice();

//descuenta del inevntario los productos que esten en el carrito de compras
//bajando así su cantidad disponible
cart.buy((cart) => {
  return cart.products.every((product) => {
    return inventary.deleteQuantity(product.id, product.quantity);
  });
});

//Trae el carrito
cart.getShoppingCart();

//Calcula todos los precios del carrito
cart.totalPrice();
