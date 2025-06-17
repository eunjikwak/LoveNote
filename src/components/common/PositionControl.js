import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const DisplayArea = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px dashed #ccc;
  /* margin-bottom: 30px; */
  background-color: #f9f9f9;
`;

const MovingText = styled.div`
  position: absolute;
  top: ${(props) => props.top}%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const Slider = styled.input`
  appearance: none;
  height: 7px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  flex: 1;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: ${palette.colors.primary};
    border-radius: 50%;
    cursor: pointer;
  }
`;

const PositionControl = ({ position, setPosition }) => {
  return (
    <Wrapper>
      <Slider
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
      {/* <DisplayArea>
        <MovingText top={0 + position * 0.9}>이동하는 문구</MovingText>
      </DisplayArea> */}
    </Wrapper>
  );
};

export default PositionControl;
