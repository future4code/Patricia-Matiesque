import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    
`

function Filter() {
  return (
    <Section>
     <button>Marcar todas como completas</button>
     <span>Todas</span>
     <span>Pendentes</span>
     <span>Completas</span>
     <button>Remover completas</button>
    </Section>
  );
}

export default Filter;
