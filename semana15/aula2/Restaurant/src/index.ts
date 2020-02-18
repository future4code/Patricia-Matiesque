import { SaltyDish } from "./SaltyDish";
import { Dessert } from "./Dessert";
import { Dish } from "./dish";

const feijoada = new SaltyDish(100, 20, ["Feijão"], 100);
const macarronada = new SaltyDish(50, 20, ["Macarrão"], 20);
const brigadeiro = new Dessert(10, 5, ["leite condensado", "Chocolate"], 30, 5);
const beijinho = new Dessert(8, 4, ["leite condensado", "Coco"], 30, 5);

const dishes: Dish[] = [
    feijoada,
    macarronada,
    brigadeiro,
    beijinho
]

let sum = 0
dishes.forEach(dish => {
    sum += dish.getPrice();
});





