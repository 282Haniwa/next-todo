import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default props => (
  <>
    <Root {...props} />
  </>
);
