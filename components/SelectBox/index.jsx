import React, { useState } from 'react';
import styled from 'styled-components';
import { icon } from '../../utils/path';

const Label = styled.label`
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.black};
`;

const SelectWrapper = styled.div`
  position: relative;

  ::after {
    content: url(${icon('expand')});
    height: 32px;
    width: 32px;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -16px;
    z-index: -1;
  }
`;

const Select = styled.select`
  border: 1px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  line-height: 21px;
  min-width: 120px;
  letter-spacing: 0.05em;
  padding: 6px 11px 5px 11px;
`;

const ExpandIcon = styled.div`
  position: absolute;
  left: -24px;
`;

export default props => {
  const { label, items = [], value: defaultValue = 0, onChange } = props;
  const [value, setValue] = useState(items.indexOf(defaultValue) + 1 || 0);

  const handleChange = (event, value) => {
    setValue(event.target.value);
    onChange &&
      onChange(event.target[event.target.selectedIndex].dataset.value, event.target.value, event);
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <SelectWrapper>
        <Select value={value} onChange={handleChange}>
          <option value={0}></option>
          {items.map(item => {
            return (
              <option key={item.value} value={item.value} data-value={item.text}>
                {item.text}
              </option>
            );
          })}
        </Select>
      </SelectWrapper>
      <ExpandIcon>
        <img src={icon('expand')} alt="" />
      </ExpandIcon>
    </div>
  );
};
