import Section from './components/Section/Section';
import Container from './components/Container/Container';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
// import ImageGallery from './components/ImageGallery/ImageGallery'
// import ImageModal from './components/ImageModal/ImageModal'
// import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
// import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <>
      <SearchBar onSubmit="" />
      <Container>
        <Section></Section>
      </Container>
    </>
  );
};

export default App;
