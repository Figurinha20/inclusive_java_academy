class Order {
  constructor(name) {
    this.id = -1;
    this.requesterName = name
    this.products = [];
  }

  addProduct(productName, productExtras) {
    const product = new Product(productName, productExtras);
    this.products.push(product);
  }

  save() {
    // TODO: save in db
  }
}

class Product {
  constructor(name, extra) {
    this.name = name;
    this.extra = extra;
  }

  // add more methods
}