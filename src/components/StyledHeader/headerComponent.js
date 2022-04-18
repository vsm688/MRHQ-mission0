import React, { useState } from 'react'
import { StyledHeader, LogoDiv, MenuDiv, LoginButton, HamBurger } from './Header.styled'
const HeaderComponent = () => {


    const [burgerState, changeBurgerState] = useState(false);

    const clickBurgerMenu = () => {
        changeBurgerState(!burgerState)
        console.log("changed!")
    }

    return (
        <StyledHeader>
            <LogoDiv>
                <img></img>
                <p>My Company</p>
            </LogoDiv>
            <MenuDiv>
                <ul>
                    <li>About</li>
                    <li>Test</li>
                    <li>Contact us</li>
                    <LoginButton>Login</LoginButton>
                </ul>
                <HamBurger open = {burgerState} onClick = {() => clickBurgerMenu() }>
                    <div></div>
                    <div></div>
                    <div></div>
                </HamBurger>
            </MenuDiv>

        </StyledHeader>
    )
}

export default HeaderComponent