"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SaltyDish_1 = require("./SaltyDish");
const Dessert_1 = require("./Dessert");
const feijoada = new SaltyDish_1.SaltyDish(100, 20, ["leite condensado"], 100);
console.log(feijoada.getProfit());
const brigadeiro = new Dessert_1.Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());
//# sourceMappingURL=index.js.map