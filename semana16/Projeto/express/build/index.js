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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'patricia',
        password: 'AejHS7$R5$D9kWNPp1v~',
        database: 'bouman-patricia'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/ping': 'retorna o texto pong',
            '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
app.post('/createUser', (req, res) => {
    const nonQuery = connection.insert(req.body).into('users');
    nonQuery.then((result) => {
        res.send(`O usuário ${req.body.nickname} foi criado`);
    }).catch((err) => {
        res.send(err);
    });
});
app.put('/changeUser/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const new_nickname = req.body.nickname;
    const query = connection('users').where('id_user', '=', id).update({ nickname: new_nickname });
    try {
        const result = yield query;
        res.send("usuario alterado com sucesso");
    }
    catch (error) {
        res.send(error);
    }
}));
app.delete('/deleteUser/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const query = connection('users').where({ "id_user": id }).del();
    try {
        const result = yield query;
        res.send("sucesso");
    }
    catch (error) {
        res.send(error);
    }
}));
app.get('/getUser/:data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.params.data;
    const query = connection.select("*")
        .from('users')
        .where({ "id_user": data })
        .orWhere({ "name": data });
    try {
        const result = yield query;
        res.send("sucesso");
    }
    catch (error) {
        res.send(error);
    }
}));
app.get('/getAllUsers/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.query.order;
    const age = req.query.age;
    let query = connection.select("*").from('users');
    if (order) {
        query = query.orderBy("name", order);
    }
    if (age) {
        query = query.where({ "birth_date": age });
    }
    try {
        const result = yield query;
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
