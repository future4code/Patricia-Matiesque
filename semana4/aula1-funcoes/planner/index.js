
function criarTarefa(){
    const campoTexto = document.getElementById("texto").value
    const valorDoCampo = document.getElementById("diaSemana").value
    valorDoCampo.innerHTML += campoTexto 

let elementoSegunda = document.getElementById("segunda");
elementoSegunda.innerHTML += "<p>" + campoTexto + "</p>";
let elementoTerca = document.getElementById("terca");
elementoTerca.innerHTML += "<p>" + campoTexto + "</p>";
let elementoQuarta = document.getElementById("quarta");
elementoQuarta.innerHTML += "<p>" + campoTexto + "</p>";
let elementoQuinta = document.getElementById("quinta");
elementoQuinta.innerHTML += "<p>" + campoTexto + "</p>";
let elementoSexta = document.getElementById("sexta");
elementoSexta.innerHTML += "<p>" + campoTexto + "</p>";
let elementoSabado = document.getElementById("sabado");
elementoSabado.innerHTML += "<p>" + campoTexto + "</p>";
let elementoDomingo = document.getElementById("domingo");
elementoDomingo.innerHTML += "<p>" + campoTexto + "</p>";

}