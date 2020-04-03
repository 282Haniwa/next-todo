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

  color: #00214d;
`;

const TextArea = styled.textarea`
  border: 1px solid ${props => props.theme.colors.border};
  box-sizing: border-box;
  border-radius: 5px;
`;

export default props => {
  const { label, value = '', onChange } = props;
  const handleChange = event => {
    onChange && onChange(event.target.value, event);
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <TextArea onChange={handleChange} />
    </div>
  );
};
