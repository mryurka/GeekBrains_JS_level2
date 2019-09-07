const BASE_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

//------------------ hw part_1 begin
const makeGETRequest = (url) => new Promise((resolve, reject) => {
  const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 ) {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject('Something goes wrong...');
      }
      }
  };
});
//------------------ hw part1 end

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
  totalPrice() {
    return this.goods.reduce((total, good) => {
      if (!good.price) return total;
      return total += good.price;
    }, 0);
  }
  fetchGoods() {
    makeGETRequest(`${BASE_URL}/catalogData.json`).then((goods) => {
      this.goods = JSON.parse(goods);
      list.render();
    }).catch((txt) => {alert(txt)});
  }
  render() {
    document.querySelector(this.container).innerHTML = this.goods.reduce((acc, item) => {
      const good = new GoodsItem(item.product_name, item.price);
      return acc += good.render();
    }, '');
  }
}

class Cart extends GoodsList {
  //------------------ hw part_2 begin
  add(good) {
  this.goods.push(good);
  }

  remove(id) {
    if (!id) {
      // clean cart
      return;
    }
    else {
      this.toppings.splice(id, 1);
    }
  }
  //------------------ hw part2 end
  update(id, good) {}

}

class CartItem extends GoodsItem {
  constructor(title = 'No name', price = 'No price', count = 1) {
    super(title, price);
    this.count = count;
  }
}


const list = new GoodsList('.goods-list');
list.fetchGoods();
