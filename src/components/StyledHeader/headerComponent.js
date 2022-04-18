import React from 'react'
import { StyledHeader, LogoDiv, MenuDiv, LoginButton } from './Header.styled'
const headerComponent = () => {
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
            </MenuDiv>
        </StyledHeader>
    )
}

export default headerComponent