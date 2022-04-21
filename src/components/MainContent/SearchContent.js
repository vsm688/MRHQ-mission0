import React from 'react'
import { MainDiv, SearchContainer, SearchInput, SearchButton, TextDiv, CompanyImg,InputCenter } from './SearchContent.styled'
const SearchContent = () => {
  return (
    <MainDiv>
      <TextDiv>
        <h1>Search for all your PC part needs...</h1>
      </TextDiv>


      <SearchContainer>
        <InputCenter>
          <SearchInput></SearchInput>
          <SearchButton>Search</SearchButton>
        </InputCenter>
      </SearchContainer>


    </MainDiv>
  )
}

export default SearchContent;