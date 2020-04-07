import React from 'react';
import styled from 'styled-components';
import { icon } from '../../utils/svg';

const Button = styled.button`
  border-radius: 50%;
  padding: 4px;
`;

const Svg = styled.svg`
  & > path {
    fill: ${props => props.color || props.theme.colors.gray};
  }
`;

export default props => {
  const { icon: iconName, iconProps = {}, color, ...other } = props;
  const Icon = Svg.withComponent(icon(iconName));

  return (
    <Button {...other}>
      <Icon color={color} {...iconProps}></Icon>
    </Button>
  );
};
