import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }
}


export const feijoada = new SaltyDish(100, 20, ["Feijão"], 100);
console.log(feijoada.getProfit());

export const macarronada = new SaltyDish(50, 20, ["Macarrão"], 20);
console.log(macarronada.getProfit());
