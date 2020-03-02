import { User } from "./User";


export class Teacher implements User{
    constructor(
        public name: string,
        public email: string,
        public birthDate: number
    ){}
} 
