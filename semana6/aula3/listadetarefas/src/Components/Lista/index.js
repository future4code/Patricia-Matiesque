import React from 'react';
import styled from "styled-components";



const ListaContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;


export default function Lista(props) {
 return (
  <ListaContainer>
      <ul>
        <li>{props.tarefa}</li>
      </ul>
  </ListaContainer>

  );
}

