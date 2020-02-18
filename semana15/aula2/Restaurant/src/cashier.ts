import { Employee } from "./employee";
import { Dish } from "./dish";

export class Cashier extends Employee {
    public sayJob(): string{
        return "Eu sou um caixa"
    }
    
    public calculateBill(bill: Dish[]): number{
        let sum = 0;
        bill.forEach(dish => {
            sum += dish.getPrice()
        });
        return sum
    }

}