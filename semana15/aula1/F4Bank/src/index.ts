class UserAccount {
    balance:number
    cpf: string
    name:string
    age: number
    transactions: transactions[]
}

getBalance(): number

addBalance(): void

class Transaction{
    cpf: string
    value:number
    description:string
}
