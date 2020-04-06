import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RootStyles } from '../../styles/common';
import { TextArea, TextField, SelectBox, Button, IconButton } from '../../components';

const Root = styled(RootStyles)`
  & > * {
    margin-top: 16px;
  }
`;

const selectList = [
  {
    text: '選択肢1',
    value: '1',
  },
  {
    text: '選択肢2',
    value: '2',
  },
  {
    text: '選択肢255',
    value: '255',
  },
];

export default () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const handleChangeTextArea = value => {
    setTextAreaValue(value);
  };

  const handleChangeTextField = value => {
    setTextFieldValue(value);
  };

  const handleChangeSelectBox = value => {
    setSelectValue(value);
  };

  return (
    <>
      <Root>
        <span>Components List</span>
        <hr width="100%" />
        <span>TextArea</span>
        <TextArea label="label" onChange={handleChangeTextArea} value={textAreaValue} />
        <hr width="100%" />
        <span>TextField</span>
        <TextField label="label" onChange={handleChangeTextField} value={textFieldValue} />
        <hr width="100%" />
        <span>SelectBox</span>
        <SelectBox
          label="label"
          items={selectList}
          onChange={handleChangeSelectBox}
          value={selectValue}
        ></SelectBox>
        <hr width="100%" />
        <span>Button</span>
        <Button variant="main">Button</Button>
        <Button variant="lime">Button</Button>
        <Button variant="outline">Button</Button>
        <hr width="100%" />
        <span>IconButton</span>
        <IconButton></IconButton>
        <hr width="100%" />
      </Root>
    </>
  );
};
