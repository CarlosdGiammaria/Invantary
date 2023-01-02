export class ShoppingCart {
  constructor(productos = []) {
    this.productos = productos;
  }

  getShoppingCart() {
    return this.productos;
  }

  addProductoCart(producto, quantity) {
    let index = this.productos.findIndex((data) => data.id === producto.id);
    let isProduct = this.productos[index];

    if (isProduct) {
      this.productos[index].quantity += quantity;
    } else {
      this.productos.push({ ...producto, quantity });
    }
  }

  deleteQuantityById(id, quantity) {
    const producto = this.productos.find((producto) => producto.id === id);
    const _quantity = producto.quantity - quantity;

    if (_quantity > 0) {
      producto.quantity = producto.quantity - quantity;
      return producto.quantity;
    }

    this.productos = this.productos.filter((producto) => producto.id !== id);
  }

  clearCart() {
    this.productos = [];
  }

  precioTotal() {
    const productos = this.productos;
    const totalPyQ = productos.reduce((acc, cur) => {
      const total = cur.quantity * cur.price;
      return acc + total;
    }, 0);

    return totalPyQ;
  }
}


