import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const ToggleContainer = styled.button`
  width: 50px;
  height: 28px;
  background-color: ${(props) =>
    props.isOn ? palette.colors.secondary : "#ccc"};
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
`;

const ToggleCircle = styled.div`
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isOn ? "25px" : "3px")};
  transition: left 0.3s;
`;

const ToggleButton = ({ toggleIsOpen, setToggleIsOpen, isOpen }) => {
  const handleClick = (e) => {
    if (isOpen || toggleIsOpen) {
      e.stopPropagation();
    }

    setToggleIsOpen((prev) => !prev);
  };

  return (
    <ToggleContainer isOn={toggleIsOpen} onClick={handleClick}>
      <ToggleCircle isOn={toggleIsOpen} />
    </ToggleContainer>
  );
};

export default ToggleButton;
