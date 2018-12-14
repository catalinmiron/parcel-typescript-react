import React from 'react';
import styled from 'styled-components';

export const Greeting = styled.h1`
  text-align: center;
  color: gold;
  padding: 40px 0;
  font-size: 3.2rem;
`;

type Args = {
  name: string;
}

export default ({name}: Args) => <Greeting>Zalut, {name}!</Greeting>