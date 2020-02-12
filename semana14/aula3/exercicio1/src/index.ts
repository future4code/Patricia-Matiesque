import { readFile, readdir } from "fs";

const nomeDoArquivo = "textos/";

const minhaPromessaDeLeitura = new Promise((resolve, reject) => {
    readdir( nomeDoArquivo, (err :Error, files: string[] ) => {
        err ? reject(err) : resolve(files.toString())
    })
});

minhaPromessaDeLeitura.then((resolve) =>{
    console.log(resolve)
}).catch(error => {
    console.error(error)
})





