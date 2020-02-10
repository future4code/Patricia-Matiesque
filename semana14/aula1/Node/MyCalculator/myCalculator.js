
const expr = process.argv[2];
const red   = '\u001b[31m';
const blue  = '\u001b[34m';


if (process.argv.length <= 4) {
  console.log("Esperava 4 parâmetros, recebi menos que isso.")
} else {
switch (expr) {
  case 'add':
    const valorAdd = Number(process.argv[3]) + Number(process.argv[4])
    console.log(red + 'Resposta:  ', blue + valorAdd );
    break;
  case 'sub':
    const valorSub = Number(process.argv[3]) - Number(process.argv[4])
    console.log(red + 'Resposta: ', blue + valorSub);
    break;
  case 'mult':
    const valorMult = Number(process.argv[3]) * Number(process.argv[4])
    console.log(red + 'Resposta: ', blue + valorMult);
    break;
  case 'div':
    const valorDiv = Number(process.argv[3]) / Number(process.argv[4])
    console.log(red + 'Resposta: ',blue + valorDiv);
    break;
  default:
    console.log(red + 'Resposta: erro');
}
}