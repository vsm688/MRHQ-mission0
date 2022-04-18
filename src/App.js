
import Header from './components/StyledHeader/headerComponent';
import GlobalStyle from './components/GlobalStyle/globalStyled';
import MainContent from './components/MainContent/MainContent';
import ImageContainer from './components/ImageContainer/ImageContainer';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <MainContent></MainContent>
      <ImageContainer></ImageContainer>
    </>
  );
}

export default App;
