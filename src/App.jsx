import Section from './components/Section/Section';
import Container from './components/Container/Container';
// import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery';
// import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images-api';
import { useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async inputValue => {
    const res = await fetchImages(inputValue);
    setImages(res);
    console.log(inputValue);
    console.log(res);
  };

  const loadMoreImages = async () => {};

  return (
    <>
      <Container>
        <Section className="search">
          <SearchBar onSubmit={handleSubmit} />
        </Section>
        {/* <Section className="images">
          {images.length > 0 && <ImageGallery images={images} />}
        </Section>
        {images.length > 0 && (
          <Section className="loadMore">
            <LoadMoreBtn onClick={loadMoreImages} loading={loading} />
          </Section>
        )} */}
        <Section className="loading">
          <Loader />
        </Section>
      </Container>
    </>
  );
};

export default App;
