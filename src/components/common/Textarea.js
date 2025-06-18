import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const StyledTextarea = styled.textarea`
  flex: 1;
  padding: 15px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
  width: 100%;
  height: 250px;

  &:focus {
    border-color: ${palette.colors.primary};
  }

  &::placeholder {
    color: #aaa;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  `}
`;

const Textarea = ({ type = "text", value, onChange, placeholder, ...rest }) => {
  return (
    <StyledTextarea
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Textarea;
