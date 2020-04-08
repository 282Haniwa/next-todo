import React from 'react';
import styled, { css } from 'styled-components';
import { icon } from '../../utils/svg';

const Button = styled.button`
  position: relative;
  min-width: 114px;
  border-radius: 5px;
  padding: 5px 10px;
  ${props => {
    let style;
    switch (props.variant) {
      case 'outline':
        style = css`
          color: ${props => props.theme.colors.gray};
          background-color: white;
          border: 2px solid ${props => props.theme.colors.gray};
        `;
        break;
      case 'main':
        style = css`
          color: white;
          background-color: ${props => props.theme.colors.main};
        `;
        break;
      case 'lime':
        style = css`
          color: ${props => props.theme.colors.black};
          background-color: ${props => props.theme.colors.lime};
        `;
        break;
      case 'white':
        style = css`
          color: ${props => props.theme.colors.main};
          background-color: ${props => props.theme.colors.paper};
        `;
        break;
    }
    return style;
  }}

  &.with-icon {
    padding: 5px 34px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

export default props => {
  const { className = '', icon: iconName, children, ...other } = props;
  const Icon = icon(iconName);

  return (
    <Button className={`${Icon ? 'with-icon' : ''} ${className}`} {...other}>
      <IconWrapper>{Icon && <Icon />}</IconWrapper>
      {children}
    </Button>
  );
};
