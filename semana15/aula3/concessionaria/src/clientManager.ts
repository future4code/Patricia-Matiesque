import { Client } from "./client";


export class ClientManager {
    public clients: Client[]

    constructor() {
     this.clients = [] 
    }

    public addClient(client: Client): void {
        this.clients.push(client)
      }
    
    public getClientsQuantaty(){
        console.log("A quantidade de clientes é: ", this.clients.length)
    }

    public printCellBilss(){
        this.clients.forEach((client) => {
            console.log(client.clientNumber = "-" + client.clientName + "-" + client.calculateBill())
        })
    }

    public calculateAllIncome(){
        let total=0
        this.clients.forEach((client) => {
            total += client.calculateBill()
        })
        console.log(total)
    }
    

}
