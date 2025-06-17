import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  padding: 15px 50px 15px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  outline: none;
  width: 200px;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;
`;

const ColorInput = styled.input`
  position: absolute;
  top: 50%;
  right: -1px;
  transform: translateY(-50%);
  height: 55px;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    onColorChange?.(newColor);
  };

  return (
    <InputWrapper>
      <TextInput type="text" value={color} disabled />
      <ColorInput type="color" value={color} onChange={handleColorChange} />
    </InputWrapper>
  );
};

export default ColorPicker;
