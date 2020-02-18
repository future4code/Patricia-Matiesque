export abstract class Employee {
    protected name: string;
    protected pay: number;

    constructor(
        name: string, 
        pay: number 
    ) {
        this.name = name;
        this.pay = pay
    }

    public abstract sayJob(): string;

}

