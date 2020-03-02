"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
moment.locale("pt-br");
const jsonData = "data.json";
const userData = {
    nome: process.argv[2],
    cpf: Number(process.argv[3]),
    nascimento: moment(process.argv[4], 'DD/MM/YYYY HH:mm').toDate(),
};
const jsonString = JSON.stringify(userData);
fs_1.writeFile(jsonData, jsonString, err => {
    if (err) {
        console.log(' Erro ao gravar arquivo ', err);
    }
});
const getAllAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
    const eventoPromessa = new Promise((resolve, reject) => {
        fs_1.readFile(jsonData, (err, data) => {
            if (err) {
                reject(err);
                console.log(err);
                return;
            }
            resolve(data.toString());
        });
    });
    const conteudoJson = yield eventoPromessa;
    const usuarioObjeto = JSON.parse(conteudoJson);
    return usuarioObjeto;
});
getAllAccounts().then((usuarioObjeto) => console.log(usuarioObjeto.usuario));
//# sourceMappingURL=bank.js.map