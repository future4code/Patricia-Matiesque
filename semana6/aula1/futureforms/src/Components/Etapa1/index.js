import React from "react";

class Etapa1 extends React.Component{
    render(){
        return(
            <div>
                <h2>Etapa 1 - Dados Gerais</h2>
                <p>1. Qual o seu nome?</p>
                <input value="nome"></input>
                <p>2. Qual sua idade?</p>
                <input value="idade"></input>
                <p>3. Qual seu email?</p>
                <input value="email"></input>
                <p>3. Qual sua escolaridade?</p>
                <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1;