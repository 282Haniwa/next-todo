import React from 'react';
import styled from 'styled-components';

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

const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  line-height: 21px;
  letter-spacing: 0.05em;
  padding: 6px 11px 5px 11px;
`;

export default props => {
  const { label, type, value = '', onChange } = props;

  const handleChange = event => {
    onChange && onChange(event.target.value, event);
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <Input type={type || 'text'} value={value} onChange={handleChange} />
    </div>
  );
};
