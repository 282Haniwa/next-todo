import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField';
import IconButton from '../IconButton';

const MenuItemWrapper = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hover.color};
    transition: ${props => props.theme.hover.transition};
  }
`;

const MenuItemText = styled.div`
  height: 48px;
  width: 90%;
  line-height: 48px;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.05em;
  padding: 0 12px;
  color: inherit;
`;

const EditMenuItem = styled(TextField)`
  height: 32px;
  width: 90%;
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: inherit;
`;

const DeleteButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default props => {
  const { edit = false, icon, value = '', onChange, onDelete, ...other } = props;

  if (edit) {
    return (
      <MenuItemWrapper {...other}>
        <EditMenuItem value={value} onChange={onChange} />
        <DeleteButton icon="delete" onClick={onDelete}></DeleteButton>
      </MenuItemWrapper>
    );
  }
  return (
    <MenuItemWrapper {...other}>
      <MenuItemText>{value}</MenuItemText>
    </MenuItemWrapper>
  );
};
