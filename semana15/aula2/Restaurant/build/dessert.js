"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook, slicesNumber) {
        super(price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    getSlicePrice() {
        return this.price / this.slicesNumber;
    }
}
exports.Dessert = Dessert;
const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());
//# sourceMappingURL=dessert.js.map