import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RootStyles } from '../../styles/common';
import { TextArea, Button } from '../../components';

const Root = styled(RootStyles)`
  * {
    margin-top: 16px;
  }
`;

export default () => {
  const [value, setValue] = useState('');
  const handleChangeTextArea = value => {
    console.log(value);
    setValue(value);
  };

  return (
    <>
      <Root>
        <span>Components List</span>
        <hr width="100%" />
        <span>TextArea</span>
        <TextArea label="label" onChange={handleChangeTextArea} value={value}></TextArea>
        <hr width="100%" />
        <span>Button</span>
        <Button variant="main">Button</Button>
        <Button variant="lime">Button</Button>
        <Button variant="outline">Button</Button>
        <hr width="100%" />
      </Root>
    </>
  );
};
