import React from 'react'
import { MainDiv, SearchContainer, SearchInput, SearchButton, TextDiv } from './MainContent.styled'
const MainContent = () => {
  return (
    <MainDiv>
      <TextDiv>
        <h1>Search for all your PC part needs</h1>
      </TextDiv>
      <SearchContainer>

        <SearchInput></SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchContainer>


    </MainDiv>
  )
}

export default MainContent