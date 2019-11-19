function clicarCadastrar(){
    const nomeUsuario = document.getElementById("nome").value
    const idadeUsuario = document.getElementById("idade").value
    const emailUsuario = document.getElementById("email").value


    const criarlistaInscritos = document.getElementById(listaInscritos)
    listaInscritos.innerHTML += "<p> Nome:   " + nomeUsuario + "</p>"
    listaInscritos.innerHTML += "<p> Idade:  " + idadeUsuario + "</p>"
    listaInscritos.innerHTML += "<p> E-mail: " + emailUsuario + "</p>"

    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("email").value = ""
}