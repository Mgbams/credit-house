import React, { useState } from "react";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  left: 6.5rem;
  background-color: ${COLORS.primaryDark};
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
`;

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        Menu
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>
    </div>
  );
}

export default Navbar;
