"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const nomeDoArquivo = "textos/";
const minhaPromessaDeLeitura = new Promise((resolve, reject) => {
    fs_1.readdir(nomeDoArquivo, (err, files) => {
        err ? reject(err) : resolve(files.toString());
    });
});
minhaPromessaDeLeitura.then((resolve) => {
    console.log(resolve);
}).catch(error => {
    console.error(error);
});
//# sourceMappingURL=index.js.map