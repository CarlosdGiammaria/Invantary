import { INVENTARIO } from "./data.js";
export class ShoppingCart {
  constructor(products = []) {
    this.products = products;
  }

  getShoppingCart() {
    return this.products;
  }

  addProductCart(product, quantity) {
    let index = this.products.findIndex((data) => data.id === product.id);
    let isProduct = this.products[index];
    let inventory = INVENTARIO.findIndex((data) => data.id === product.id);

    if (isProduct) {
      this.products[index].quantity += quantity;
    } else {
      this.products.push({ ...product, quantity });
    }

    if (INVENTARIO[inventory].quantity - quantity >= 0) {
      INVENTARIO[inventory].quantity -= quantity;
    }
  }

  deleteQuantityById(id, quantity) {
    const product = this.products.find((product) => product.id === id);
    const _quantity = product.quantity - quantity;

    if (_quantity > 0) {
      product.quantity = product.quantity - quantity;
      return product.quantity;
    }
    this.products = this.products.filter((product) => product.id !== id);
  }

  clearCart() {
    this.products = [];
  }

  totalPrice() {
    const products = this.products;
    const totalPyQ = products.reduce((acc, cur) => {
      const total = cur.quantity * cur.price;
      return acc + total;
    }, 0);

    return totalPyQ;
  }
}


