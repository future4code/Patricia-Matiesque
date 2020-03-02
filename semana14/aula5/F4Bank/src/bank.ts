import { readdir, readFile, writeFile, appendFile, appendFileSync } from 'fs';
import * as moment from 'moment';
moment.locale("pt-br");

type user = {
    nome: string,
    cpf: number,
    nascimento: Date,
}
type transacoes = {
    saldo: number
}

const jsonData = "data.json";
type dataArquivo = {
    usuarios: user[]
}

const userData: user = { 
    nome: process.argv[2],
    cpf: Number(process.argv[3]),
    nascimento: moment (process.argv[4], 'DD/MM/YYYY HH:mm').toDate(),
} 
const jsonString = JSON.stringify (userData) 
  writeFile (jsonData, jsonString, err => { 
    if (err) { 
        console.log (' Erro ao gravar arquivo ', err) 
    }
})

const getAllAccounts = async () => {
    const eventoPromessa: Promise<string> = new Promise((resolve, reject) => {
        readFile(jsonData, (err: Error, data: Buffer) =>{
            if(err) {
                reject(err);
                console.log(err)
                return
            }
            resolve(data.toString())
        }
        )
    })
    const conteudoJson: string = await eventoPromessa;
    const usuarioObjeto: dataArquivo = JSON.parse(conteudoJson);
    return usuarioObjeto
}

getAllAccounts().then((usuarioObjeto: any) => console.log(usuarioObjeto.usuario))
