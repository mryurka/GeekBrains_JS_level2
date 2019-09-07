class GoodsItem {
  constructor(title = 'No name', price = 'No price') {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor(container = '.container') {
    this.container = container;
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      {
        title: 'Shirt', price: 150
      },
      {
        title: 'Socks', price: 50
      },
      {
        title: 'Jacket', price: 350
      },
      {
        title: 'Shoes', price: 250
      },
      {
        price: 350
      }
    ];
  }
  render() {
    document.querySelector(this.container).innerHTML = this.goods.reduce((acc, item) => {
      const good = new GoodsItem(item.title, item.price);
      return acc += good.render();
    }, '');
  }

  sumPrices() { //метод возвращает сумму прайсов всех товаров
    return this.goods.reduce((sum, current) => sum += current.price, 0)
  }
}

class Cart { //---пустой класс для корзины BEGIN---
  constructor () {
    this.cartList = []; //корзина ввиде списка
  }
  renderCart (){ //метод отображающий содержимое корзины

  }
  addCartItem () { //метод для добавления товаров в корзину

  }
  removeCartItem () { //метод для удаления товаров из корзины

  }
  clearCart () { //метод полной очистки корзины

  }
  sumCartItems () { //метод подсчёта общей стоимости товаров в корзине

  }

} //---пустой класс для корзины END---

class CartItem { //---пустой класс для элемента корзины BEGIN---
  constructor (allGoods = list.goods, title = 'No name') {
    this.item = allGoods.find(item => item.title === title);
  }
  getItem() { //возвращает объект товара
    return this.item
  };


} //---пустой класс для элемента корзины END---

const list = new GoodsList('.goods-list');
list.fetchGoods();
list.render();