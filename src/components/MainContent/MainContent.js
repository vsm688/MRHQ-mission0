import React from 'react'
import { MainDiv, SearchContainer, SearchInput, SearchButton, TextDiv } from './MainContent.styled'
const MainContent = () => {
  return (
    <MainDiv>
      <TextDiv>
        <h1>Loreum Ipsum Dolor sit amet</h1>
      </TextDiv>
      <SearchContainer>

        <SearchInput></SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchContainer>


    </MainDiv>
  )
}

export default MainContent