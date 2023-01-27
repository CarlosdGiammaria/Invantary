export class Inventory {
  constructor(articles = []) {
    this.articles = articles;
  }
  getInventory() {
    return this.articles;
  }
  getProductById(id) {
    return this.articles.find((product) => product.id === id);
  }

  getCategories() {
    const categories = this.articles.map((product) => product.category);
    return [...new Set(categories)];
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

      return true;
    }

    return false;
  }

  updateProduct(id, data = {}) {
    const { name, description, image, category, price } = data;
    const product = this.articles.find((product) => product.id === id);

    product.name = name || product.name;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;
    product.price = price || product.price;
  }

  deleteProduct(id) {
    const products = this.articles.filter((product) => product.id !== id);

    this.articles = products;
  }

  resetInventory(inventory) {
    this.articles = inventory || [];

    return this.articles;
  }
}
