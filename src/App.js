
import HeaderComponent from './components/StyledHeader/headerComponent';
import GlobalStyle from './components/GlobalStyle/globalStyled';
import MainContent from './components/MainContent/MainContent';
import ImageContainer from './components/ImageContainer/ImageContainer';
function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent></HeaderComponent>
      <MainContent></MainContent>
      <ImageContainer></ImageContainer>
    </>
  );
}

export default App;
