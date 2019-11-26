import React from 'react';
import './PageSection.css';

function PageSection(props){
    return(
    <div className="conteudoPageSection">
        <h2>{props.titulopage}</h2>
        {props.children}
    </div>
    )
}

export default PageSection