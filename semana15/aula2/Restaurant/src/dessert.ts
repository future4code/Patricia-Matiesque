import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }
}


export const brigadeiro = new Dessert(10, 5, ["leite condensado", "Chocolate"], 30, 5);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());

export const beijinho = new Dessert(8, 4, ["leite condensado", "Coco"], 30, 5);
console.log(beijinho.getSlicePrice());
console.log(beijinho.getProfit());
