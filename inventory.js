export class Inventario {
  constructor(articulos = []) {
    this.articulos = articulos;
  }

  getProductById(id) {
    return this.articulos.find((product) => product.id === id);
  }

  getProductsByCategory(category) {
    return this.articulos.filter((product) => product.category === category);
  }

  addQuantity(id, quantity) {
    const product = this.articulos.find((product) => product.id === id);
    product.quantity = product.quantity + quantity;

    return product.quantity;
  }

  deleteQuantity(id, quantity) {
    const product = this.articulos.find((product) => product.id === id);
    const _quantity = product.quantity - quantity;

    if (_quantity >= 0) {
      product.quantity = product.quantity - quantity;

      return product.quantity;
    }

    return false;
  }

  updateProduct(id, data = {}) {
    const { name, description, image, category } = data;
    const product = this.articulos.find((product) => product.id === id);

    product.name = name || product.name;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;
  }
  deleteProduct(id) {
    const products = this.articulos.filter((product) => product.id !== id);
    this.articulos = products;
  }
  getInventory() {
    return this.articulos;
  }

  resetInventory() {
    this.articulos = [];
  }

  addInventory(inventory) {
    this.articulos = inventory;
  }
}
