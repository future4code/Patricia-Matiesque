const fs = require('fs');
const blue  = '\u001b[34m';
const data = "\n" + process.argv[2];
const fileName = "tarefas.txt";

if (process.argv.length <= 2) {
    console.log("Esperava 3 parâmetros, recebi menos que isso.")
  } else {
try{
    fs.appendFileSync(fileName, data, 'utf8');
    console.log(blue + "Tarefa inserida com sucesso!");
} catch(err){
    console.log(err);
}
}
