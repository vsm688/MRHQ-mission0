
import HeaderComponent from './components/StyledHeader/headerComponent';
import GlobalStyle from './components/GlobalStyle/globalStyled';
import ImageContainer from './components/ImageContainer/ImageContainer';
import SearchContent from './components/MainContent/SearchContent';
function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent></HeaderComponent>
      <SearchContent></SearchContent>
      <ImageContainer></ImageContainer>
    </>
  );
}

export default App;
