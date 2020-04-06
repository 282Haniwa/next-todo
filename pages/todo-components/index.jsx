import React, { useState } from 'react';
import Link from 'next/link';
import { RootStyles } from '../../styles/common';
import { TextArea, SelectBox } from '../../components';

const selectList = ['仕事', '趣味', 'その他'];

export default props => {
  const [value, setValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const handleChangeTextArea = value => {
    setValue(value);
  };

  const handleChangeSelectBox = value => {
    setSelectValue(value);
  };

  return (
    <>
      <RootStyles>
        <span>Components List</span>
        <TextArea label="label" onChange={handleChangeTextArea} value={value}></TextArea>
        <SelectBox
          label="label"
          list={selectList}
          onChange={handleChangeSelectBox}
          value={selectValue}
        ></SelectBox>
      </RootStyles>
    </>
  );
};
