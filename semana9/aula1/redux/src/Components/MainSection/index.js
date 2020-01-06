import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
    background: white;
    text-align:center;

`
const ListText = styled.div`
    background: white;
    text-align:center;
    display: flex;
    justify-content: center;
    

`


function MainSection() {
  return (
    <div>
      <Text>
        <input type="text" placeholder="O que tem que ser feito?" />
      </Text>
      <ListText>
          <input type="checkbox" />
          <li>
              <a>Use Redux</a>
          </li>
          <span>X</span>
      </ListText>
    </div>
  );
}

export default MainSection;
