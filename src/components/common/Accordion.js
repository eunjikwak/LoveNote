import React, { useState } from "react";
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import ToggleButton from "./Toggle";
const AccordionItemBlock = styled.div`
  border: 1px solid rgba(1, 1, 1, 0.1);
  border-radius: 8px;
  width: 100%;
`;

const AccordionButton = styled.button`
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
  }
  .left-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const AccordionContent = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "1500px" : "0")};
  overflow: ${({ $isOpen }) => !$isOpen && "hidden"};
  transition: max-height 0.35s ease;
  padding: ${({ $isOpen }) => ($isOpen ? "30px 20px" : "0 20px")};
  font-size: 16px;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Icon = styled.span`
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  font-weight: bold;
  line-height: 0;
`;

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleIsOpen, setToggleIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemBlock>
      <AccordionButton onClick={() => handleClick()}>
        <div className="left-box">
          <ToggleButton
            toggleIsOpen={toggleIsOpen}
            setToggleIsOpen={setToggleIsOpen}
            $isOpen={isOpen}
          />
          <span>{title}</span>
        </div>
        <Icon $isOpen={isOpen}>
          <SlArrowDown />
        </Icon>
      </AccordionButton>
      <AccordionContent $isOpen={isOpen}>{children}</AccordionContent>
    </AccordionItemBlock>
  );
};

export default AccordionItem;
