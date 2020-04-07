import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { RootStyles } from '../../styles/common';
import { TextArea, TextField, Button, Modal } from '../../components';

const Root = styled(RootStyles)`
  & > * {
    margin-top: 16px;
  }
`;

export default () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeTextArea = value => {
    setTextAreaValue(value);
  };

  const handleChangeTextField = value => {
    setTextFieldValue(value);
  };

  const handleClickOpenModalButton = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
        <span>Button</span>
        <Button variant="main">Button</Button>
        <Button variant="lime">Button</Button>
        <Button variant="outline">Button</Button>
        <hr width="100%" />
        <span>Modal</span>
        <Button onClick={handleClickOpenModalButton}>Open Modal</Button>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          Modal
        </Modal>
        <hr width="100%" />
      </Root>
    </>
  );
};
