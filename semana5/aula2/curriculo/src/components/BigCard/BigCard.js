import React from 'react';
import './BigCard.css';

function BigCard (props) {
    return(
        <div className="conteudoBigCard">
        <img alt="Thumbnail" src={props.imagem} />
        <p><strong>{props.titulo}</strong></p>
        <p>{props.texto}</p>
        </div>
)
}

export default BigCard