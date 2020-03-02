import { Cashier } from "./cashier";

export class Manager extends Cashier {
    public sayJob(): string{
        return "Eu sou um Gerente"
    }


}