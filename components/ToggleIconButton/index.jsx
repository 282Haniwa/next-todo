import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 50%;
  padding: 4px;
`;

export default props => {
  const { icon, ...other } = props;
  return <Button {...other}>{icon}</Button>;
};
