import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  LogoDiv,
  MenuDiv,
  LoginButton,
  HamBurger,
  DropDown,
} from "./Header.styled";
const HeaderComponent = () => {
  const [burgerState, changeBurgerState] = useState(false);
  const [dropDownState, changedropDownState] = useState(false);
  const clickBurgerMenu = () => {
    changeBurgerState(!burgerState);
    changedropDownState(!dropDownState);
    
  };


  return (
    <>
      <StyledHeader>
        <LogoDiv>
          <img src={"/images/company/logo.jpg"}></img>
          <h2>The PC part Company</h2>
        </LogoDiv>
        <MenuDiv>
          <ul>
            <li>About</li>
            <li>Test</li>
            <li>Contact us</li>
            <LoginButton>Login</LoginButton>
          </ul>
          <HamBurger open={burgerState} onClick={() => {clickBurgerMenu()}}>
            <div></div>
            <div></div>
            <div></div>
          </HamBurger>
        </MenuDiv>
      </StyledHeader>
      <DropDown drop = {dropDownState}>
          <ul>
              <li>Menu 1</li>
              <li>Menu 2</li>
              <li>Menu 3</li>
          </ul>
      </DropDown>
    </>
  );
};

export default HeaderComponent;
