import React from 'react';
import './SmallCard.css';

function SmallCard (props){
    return(
        <div className="conteudoSmallCard">
        <img alt="Thumbnail" src={props.imagem} />
        <label><strong>{props.texto}</strong></label>
        <p>{props.conteudo}</p>
        </div>
    )
}


export default SmallCard