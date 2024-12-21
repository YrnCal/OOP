class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  displayCart() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
      return;
    }

    console.log("Cart Items:");
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: ${item.calculateTotalPrice()}`
      );
    });

    console.log(`Total Items: ${this.getTotalItems()}`);
  }
}

// Create some products
const product1 = new Product(1, "Apple", 100);
const product2 = new Product(2, "Banana", 50);
const product3 = new Product(3, "Orange", 70);

// Create a shopping cart
const myCart = new ShoppingCart();

// Add items to the cart
myCart.addItem(product1, 3);
myCart.addItem(product2, 5);
myCart.addItem(product3, 2);

// Display the cart
myCart.displayCart();

myCart.removeItem(2);

// Displaying the cart after removal
myCart.displayCart();
