export class Inventario {
  constructor(articles = []) {
    this.articles = articles;
  }

  getProductById(id) {
    return this.articles.find((product) => product.id === id);
  }

  getProductsByCategory(category) {
    return this.articles.filter((product) => product.category === category);
  }

  addQuantity(id, quantity) {
    const product = this.articles.find((product) => product.id === id);
    product.quantity = product.quantity + quantity;

    return product.quantity;
  }

  deleteQuantity(id, quantity) {
    const product = this.articles.find((product) => product.id === id);
    const _quantity = product.quantity - quantity;

    if (_quantity >= 0) {
      product.quantity = product.quantity - quantity;

      return product.quantity;
    }

    return false;
  }

  updateProduct(id, data = {}) {
    const { name, description, image, category } = data;
    const product = this.articles.find((product) => product.id === id);

    product.name = name || product.name;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;
  }
  deleteProduct(id) {
    const products = this.articles.filter((product) => product.id !== id);
    this.articles = products;
  }
  getInventory() {
    return this.articles;
  }

  resetInventory(inventory) {
    this.articles = inventory || [];
    return this.articles;
  }
}
