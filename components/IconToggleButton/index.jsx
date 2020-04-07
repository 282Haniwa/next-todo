import React, { useState } from 'react';
import styled from 'styled-components';
import { icon } from '../../utils/svg';

const Button = styled.button`
  border-radius: 50%;
  padding: 4px;
`;

const Svg = props => {
  const { icon: iconName, color, activeColor, ...other } = props;
  const SvgIcon = icon(iconName);
  return SvgIcon ? <SvgIcon {...other}></SvgIcon> : <div>icon import error</div>;
};

const Icon = styled(Svg)`
  & > path {
    fill: ${props => props.color || props.theme.colors.gray};
  }

  &.active {
    path {
      fill: ${props => props.activeColor || props.theme.colors.main};
    }
  }
`;

export default props => {
  const {
    theme,
    icon: iconName,
    iconProps = {},
    color,
    activeColor,
    value = false,
    onChange,
    ...other
  } = props;
  const [active, setActive] = useState(value);

  const handleChange = event => {
    setActive(!active);
    onChange && onChange(!active, event);
  };

  return (
    <Button onClick={handleChange} {...other}>
      <Icon
        icon={iconName}
        className={active && 'active'}
        color={color}
        activeColor={activeColor}
      ></Icon>
    </Button>
  );
};
