function botaoDespesas(){
    console.log("clicou")
    const cadastroValor = document.getElementById("valor").value
    const cadastroDespesas = document.getElementById("controleDespesas").value
    const cadastroDescricao = document.getElementById("descricao").value
    if (cadastroValor = "" || cadastroDespesas = "" || cadastroDescricao = ""){
        alert ("Campos em branco, por favor preencha todos")
    }

console.log(cadastroValor)
console.log(cadastroDespesas)
console.log(cadastroDescricao)
}
