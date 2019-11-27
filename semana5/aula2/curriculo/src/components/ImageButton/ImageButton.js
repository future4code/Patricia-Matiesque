import React from 'react';
import './ImageButton.css';

function ImageButton (props){
    return(
        <div className="conteudoImageButton">
            <button><img alt="Thumbnail" src={props.imagem} />{props.texto}</button>
        </div>
    )
}


export default ImageButton