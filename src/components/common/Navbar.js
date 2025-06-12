import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useNavigate } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: ${palette.colors.secondary};
  color: white;
  position: relative;
`;

const Logo = styled.img`
  height: 25px;
  cursor: pointer;
`;

// 햄버거 아이콘 (모바일 전용)
const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin: 4px 0;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${palette.colors.primary};
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    padding: 16px;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <NavContainer>
      <Logo src="./logo.png" alt="" onClick={() => navigate("/")} />

      <MenuToggle onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </MenuToggle>

      <Menu open={open}>
        <MenuItem>청첩장 보기</MenuItem>
        <MenuItem>로그아웃</MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
