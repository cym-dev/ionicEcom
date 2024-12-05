type Product = {
  name: string;
  image: string;
  price: number;
  unit: string;
};

type CartItem = {
  index: number;
  quantity: number;
};

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        alert('Canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        alert('Success! Checkout!');
      },
    },
  ];
  cart: CartItem[] = [];
  showModal: boolean = false;
  products: Product[] = [
    {
      name: 'Rice',
      image: './assets/images/rice.jpg',
      price: 1.5,
      unit: 'per kg',
    },
    {
      name: 'Maize (Corn)',
      image: './assets/images/corn.webp',
      price: 0.75,
      unit: 'per kg',
    },
    {
      name: 'Cassava',
      image: './assets/images/cassava.webp',
      price: 1.0,
      unit: 'per kg',
    },
    {
      name: 'Beans',
      image: './assets/images/beans.webp',
      price: 2.5,
      unit: 'per kg',
    },
    {
      name: 'Livestock (e.g., Chickens or Goats)',
      image: './assets/images/farm.jpg',
      price: 20,
      unit: 'per animal',
    },
    {
      name: 'Organic Vegetables',
      image: './assets/images/organic.jpg',
      price: 3.0,
      unit: 'per pound',
    },
    {
      name: 'Organic Fruits',
      image: './assets/images/fruits.jpg',
      price: 4.5,
      unit: 'per pound',
    },
    {
      name: 'Organic Eggs',
      image: './assets/images/organicegg.jpg',
      price: 5.0,
      unit: 'per dozen',
    },
    {
      name: 'Organic Dairy Products',
      image: './assets/images/gatas.jpg',
      price: 6.5,
      unit: 'per quart',
    },
    {
      name: 'GPS-guided Planters',
      image: './assets/images/planter.webp',
      price: 20000,
      unit: 'per unit',
    },
    {
      name: 'Precision Fertilizers',
      image: './assets/images/fertilizer.jpg',
      price: 100000,
      unit: 'per unit',
    },
    {
      name: 'Drones for Crop Monitoring',
      image: './assets/images/drone.jpg',
      price: 5000,
      unit: 'per drone',
    },
    {
      name: 'Precision Irrigation Systems',
      image: './assets/images/irrigation.jpg',
      price: 15000,
      unit: 'per acre',
    },
  ];

  toggleModal() {
    this.showModal = !this.showModal;
  }

  handleAddToCart(index: number) {
    const itemIndex = this.cart.findIndex((item) => item.index === index);
    if (itemIndex === -1) {
      this.cart.push({ index, quantity: 1 });
    } else {
      this.cart[itemIndex].quantity++;
    }
  }
  handleRemoveFromCart(index: number) {
    confirm('Are you sure you want to remove this item from the cart?')
      ? this.cart.splice(index, 1)
      : null;
  }
  totalPrices() {
    return this.cart.reduce(
      (acc, item) => acc + this.products[item.index].price * item.quantity,
      0
    );
  }
  constructor() {}
}
