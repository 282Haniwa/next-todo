import React, { useState } from 'react';
import Link from 'next/link';
import { RootStyles } from '../../styles/common';
import { TextField, TextArea } from '../../components';

export default props => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChangeTextField = value => {
    setTextFieldValue(value);
  };

  const handleChangeTextArea = value => {
    setTextAreaValue(value);
  };

  return (
    <>
      <RootStyles>
        <span>Components List</span>
        <TextField label="label" onChange={handleChangeTextField} value={textFieldValue} />
        <TextArea label="label" onChange={handleChangeTextArea} value={textAreaValue} />
      </RootStyles>
    </>
  );
};
