const COLORS = {
  blue: 'blue',
  black: 'black',
  red: 'red'
};


// function MenuItem(color, name, width = 200) {
//   this.color = color;
//   this.name = name;
//   this.width = width;
// }
//
// MenuItem.prototype.makeRed = function() {
//   this.color = COLORS.red;
// };
//
//
// function MainMenuItem(color, name, width = 200) {
//   MenuItem.call(this, color, name, width)
// }
//
// MainMenuItem.prototype = Object.create(MenuItem.prototype);
// MainMenuItem.prototype.constructor = MainMenuItem;
//
// const item1 = new MenuItem(COLORS.blue, 'Foo');
// const item2 = new MenuItem(COLORS.black, 'Bar');
// const mainMenu = new MainMenuItem(COLORS.black, 'MainMenu');
//
// mainMenu.makeRed();
//
// console.log(item1);
// console.log(item2);
// console.log(mainMenu);


class MenuItem {
  constructor(color, name, width = 200) {
    this.color = color;
    this.name = name;
    this.width = width;
  }
  makeRed() {
    this.color = COLORS.red;
  }
}

class MainMenuItem extends MenuItem {
  makeBlue() {
    this.color = COLORS.blue;
  }
}

const item1 = new MenuItem(COLORS.blue, 'Foo');
const item2 = new MenuItem(COLORS.black, 'Bar');
const mainMenu = new MainMenuItem(COLORS.black, 'MainMenu');

item1.makeRed();
mainMenu.makeBlue();

console.log(item1);
console.log(item2);
console.log(mainMenu);