import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  user-select: none;
  flex: 1;
`;

const DropdownHeader = styled.div`
  padding: 15px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaa;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: white;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Arrow = styled.span`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: ${(props) =>
    props.$isOpen ? "rotate(-135deg)" : "rotate(45deg)"};
  transition: transform 0.3s;
  margin-left: 10px;
`;

const Dropdown = ({
  options,
  selected,
  onChange,
  placeholder = "선택하세요",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropdownContainer ref={containerRef}>
      <DropdownHeader onClick={toggleOpen}>
        {selected ? selected.label || selected : placeholder}
        <Arrow $isOpen={isOpen} />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.label || option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
