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
const moment = require("moment");
const fs_1 = require("fs");
moment.locale('pt-br');
const jsonarquivo = "evento.json";
const eventos = {
    nomeEvento: process.argv[2],
    descricao: process.argv[3],
    inicio: new Date(process.argv[4]),
    fim: new Date(process.argv[4]),
};
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const eventoPromessa = new Promise((resolve, reject) => {
        fs_1.readFile(jsonarquivo, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            console.log(data);
            resolve(data.toString());
        });
    });
    const conteudoJson = yield eventoPromessa;
    const eventoObjeto = JSON.parse(conteudoJson);
    return eventoObjeto;
});
getEvents().then((eventoObjeto) => console.log(eventoObjeto.eventoLista.length));
console.log(eventos);
//# sourceMappingURL=calendario.js.map