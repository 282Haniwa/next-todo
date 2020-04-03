import React, { useState } from 'react';
import Link from 'next/link';
import { RootStyles } from '../../styles/common';
import { TextArea } from '../../components';

export default props => {
  const [value, setValue] = useState('');
  const handleChangeTextArea = value => {
    setValue(value);
  };

  return (
    <>
      <RootStyles>
        <span>Components List</span>
        <TextArea label="label" onChange={handleChangeTextArea} value={value}></TextArea>
      </RootStyles>
    </>
  );
};
