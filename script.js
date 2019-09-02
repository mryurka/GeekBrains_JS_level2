const goods = [
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
  }
];
// можно сократить функцию убрав инструкцию return b фигурные скобки
const renderGoodsItem = (title = 'Socks', price = 10) => `<div class="goods-item card"><div class="card-body"><h3 class="card-title">${title}</h3><p class="card-text">${price}</p></div></div>`;

// Запятая в тексте страницы появляется в результате преобразования массива "goodsList" в строку.
// Чтобы избавиться от запятой можно использовать метод join с разделителем пустая сторка.
const renderGoodsList = (list = goods) => {
  const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
  document.querySelector('.goods-list').innerHTML = goodsList.join(''); //join('') сделает строку без ","
};

document.addEventListener('DOMContentLoaded', () => {
  renderGoodsList(); // вызываем функцию без параметров, значение будет задоно по умолчанию.
});