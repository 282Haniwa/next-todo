import React, { useState } from 'react';
import styled from 'styled-components';
import { RootStyles } from '../../styles/common';
import {
  TextArea,
  TextField,
  SelectBox,
  Button,
  IconButton,
  IconToggleButton,
  Modal,
  SideMenu,
  MenuItem,
} from '../../components';

const Root = styled(RootStyles)`
  margin-bottom: 600px;
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

const menuItems = ['menu1', 'menu2', 'menu3'];

export default () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [modalPosition, setModalPosition] = useState('center');
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeTextArea = value => {
    setTextAreaValue(value);
  };

  const handleChangeTextField = value => {
    setTextFieldValue(value);
  };

  const handleChangeSelectBox = value => {
    setSelectValue(value);
  };

  const handleClickOpenModalButton = position => () => {
    setModalPosition(position);
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
        <IconButton icon="delete" />
        <hr width="100%" />
        <span>IconToggleButton</span>
        <IconToggleButton icon="delete" />
        <IconToggleButton icon="favorite" activeColor="green" />
        <hr width="100%" />
        <span>Modal</span>
        <Button variant="main" onClick={handleClickOpenModalButton('center')}>
          Center
        </Button>
        <Button variant="main" onClick={handleClickOpenModalButton('top')}>
          Top
        </Button>
        <Button variant="main" onClick={handleClickOpenModalButton('right')}>
          Right
        </Button>
        <Button variant="main" onClick={handleClickOpenModalButton('bottom')}>
          Bottom
        </Button>
        <Button variant="main" onClick={handleClickOpenModalButton('left')}>
          Left
        </Button>
        <Modal position={modalPosition} open={modalOpen} onClose={handleCloseModal}>
          Modal
        </Modal>
        <hr width="100%" />
        <span>SideMenu</span>
        <SideMenu categories={menuItems} selected="All" />
        <hr width="100%" />
      </Root>
    </>
  );
};
