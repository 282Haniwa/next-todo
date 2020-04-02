import React from 'react';
import styled from 'styled-components';

const Hello = styled.span`
  color: blue;
  animation: 3s ease 0s 1 normal none running fade;

  @keyframes fade {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export default () => {
  return <Hello>HELLO WORLD!!</Hello>;
};
