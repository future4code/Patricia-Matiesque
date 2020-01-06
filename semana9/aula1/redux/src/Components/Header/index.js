import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
    text-align: center;
    color: red;
`

function Header() {
  return (
      <Titulo> 4Task </Titulo>
    
  );
}

export default Header;
