'use strict';
const sizes = {
    small: {name: 'small', price: 50, cal: 20},
    big: {name: 'big', price: 100, cal: 40}
};

const allToppings = {
    cheese: {name: 'cheese', price: 10, cal: 20},
    salad: {name: 'salad', price: 20, cal: 5},
    fries: {name: 'fries', price: 15, cal: 10},
    spices: {name: 'spices', price: 15, cal: 0},
    mayonnaise: {name: 'mayonnaise', price: 20, cal: 5}
};

class Hamburger {
    constructor(size = sizes['small'], toppings = false) {
        this.size = size; // {name: 'small', price: 50, cal: 20} - object
        this.toppings = [];
        if (toppings){
            for (let i = 0 ; i < toppings.length; i += 1){
                this.addTopping(toppings[i]);
            }
        }
    }

    addTopping(topping) { // Добавить добавку
        this.toppings.push(allToppings[topping]);
    }

    removeTopping(topping) { // Убрать добавку
        if (this.toppings && this.toppings.length > 0){
            const index = this.toppings.findIndex(item => item.name === topping);
            if (index >= 0){
                this.toppings.splice(index, 1);
                //delete this.toppings[index];
                return true
            }
            else return false
        }
        else return false
    }

    getToppings(topping) { // Получить список добавок
        return this.toppings
    }

    getSize() { // Узнать размер гамбургера
        return this.size
    }

    calculatePrice() { // Узнать цену
        const hamburgerPrice = this.getSize().price;
        // console.log(hamburgerPrice);
        const toppingsPrice = this.toppings.reduce((accumulator, item) => accumulator += item.price, 0);
        // console.log(toppingsPrice);
        return hamburgerPrice + toppingsPrice;
    }

    calculateCalories() { // Узнать калорийность
        const hamburgerCallories = this.getSize().cal;
        // console.log(hamburgerPrice);
        const toppingsCallories = this.toppings.reduce((accumulator, item) => accumulator += item.cal, 0);
        // console.log(toppingsPrice);
        return hamburgerCallories + toppingsCallories;
    }
}

let g = new Hamburger(sizes['big'], ["cheese","salad","mayonnaise"]);
console.log("Новый гамбургер:");
console.dir(g);
console.log("Его размер:");
console.dir(g.getSize());
console.log("Все его начинки:");
console.dir(g.getToppings());
console.log(`Полная стоимость --> ${g.calculatePrice()}`);
console.log(`Энергетическая ценность --> ${g.calculateCalories()}`);
