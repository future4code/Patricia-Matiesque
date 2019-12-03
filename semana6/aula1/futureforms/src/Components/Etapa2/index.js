import React from "react";

class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <p>5. Qual curso?</p>
                <input value="curso"></input>
                <p>5. Qual unidade de ensino?</p>
                <input value="unidadeEnsino"></input>
            </div>
        )
    }
}

export default Etapa2;