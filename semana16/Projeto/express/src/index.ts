import express, { Request, Response, response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'patricia',
    password: 'AejHS7$R5$D9kWNPp1v~',
    database: 'bouman-patricia'
  }
});

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/createUser': 'adiciona um usuario',
      '/changeUser/:id': 'retorna usuario pelo id',
      '/deleteUser/:id': 'deleta usuario pelo id',
      '/getUser/:data' : 'retorna usuario pelo nome ou id',
      '/getAllUsers/': 'retorna usuarios por ordem ou nome ou ambos'
    }
  };
  // Exemplo de retorno de um JSON
  res.send(resposta)
});


app.post('/createUser', (req: Request, res: Response) => {
  const nonQuery = connection.insert(req.body).into('users');
  nonQuery.then((result) => {
    res.send(`O usuário ${req.body.nickname} foi criado`);
  }).catch((err) => {
    res.send(err)
  })
});

app.put('/changeUser/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const new_nickname = req.body.nickname
  const query = connection('users').where('id_user', '=', id).update({nickname: new_nickname})
 try{
  const result = await query;
  res.send("usuario alterado com sucesso")
 }catch(error){
  res.send(error)
 }
});

app.delete('/deleteUser/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const query = connection('users').where({"id_user": id}).del()
  try{
    const result = await query;
    res.send("sucesso")
  }catch(error){
    res.send(error)
  }
});

app.get('/getUser/:data', async (req: Request, res: Response) => {
  const data = req.params.data
  const query = connection.select("*")
                          .from('users')
                          .where({"id_user": data})
                          .orWhere({"name": data})
  try{
    const result = await query;
    res.send("sucesso")
  }catch(error){
    res.send(error)
  }
});

app.get('/getAllUsers/', async (req: Request, res: Response) => {
  const order = req.query.order
  const age = req.query.age
  let query =  connection.select("*").from('users')
  
  if(order){
    query =  query.orderBy("name", order)
  } 
  if(age){
    query =  query.where({"birth_date": age})
  }
  try{
    const result = await query;
    res.send(result)
  }catch(error){
    res.send(error)
  }
});



// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
