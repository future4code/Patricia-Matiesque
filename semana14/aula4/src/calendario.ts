import * as moment from 'moment'
import { readFile, writeFile } from "fs";

moment.locale('pt-br')

const jsonarquivo: string = "evento.json";

type evento = {
    nomeEvento: string,
    descricao: string,
    inicio: Date,
    fim: Date,
}

type eventoArquivo = {
    eventoLista: evento[]
}

const eventos: evento = {
    nomeEvento: process.argv[2],
    descricao: process.argv[3],
    inicio: new Date(process.argv[4]),
    fim: new Date(process.argv[4]),
}

const getEvents = async () => {
    const eventoPromessa: Promise<string> = new Promise((resolve, reject) => {
        readFile(jsonarquivo, (err: Error, data: Buffer) =>{
            if(err) {
                reject(err);
                return
            }
            console.log(data);
            resolve(data.toString())
        }
        )
    })
    
    const conteudoJson: string = await eventoPromessa;
    const eventoObjeto: eventoArquivo = JSON.parse(conteudoJson);
    return eventoObjeto
}

getEvents().then((eventoObjeto: any) => console.log(eventoObjeto.eventoLista.length))
console.log(eventos)

const createEvent = async() =>{
    const criarPromessa: Promise<string> = new Promise((resolve, reject) =>{
        writeFile()  )
    })
}