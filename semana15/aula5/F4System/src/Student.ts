import { User } from "./User";
import { Mission } from "./Mission";


export class Student implements User{
    constructor(
        public name: string,
        public email: string,
        public birthDate: number,
        public team: string
    ){}

    public getName(): string{
        return this.name;
    }
   
    

} 
