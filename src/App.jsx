import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images-api';
import { useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async inputValue => {
    try {
      setImages('');
      setError(false);
      setIsLoading(true);
      const res = await fetchImages(inputValue);
      setImages(res);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreImages = async () => {};

  return (
    <>
      <Container>
        <Section className="search">
          <SearchBar onSubmit={handleSubmit} />
        </Section>
        <Section className="images">
          {images.length > 0 && <ImageGallery images={images} />}
        </Section>
        {images.length > 0 && (
          <Section className="loadMore">
            <LoadMoreBtn onClick={handleSubmit} />
          </Section>
        )}
        <Section className="loading">{isLoading && <Loader />}</Section>
        <Section className="error">{error && <ErrorMessage />}</Section>
      </Container>
    </>
  );
};

export default App;
