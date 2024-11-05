import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImages } from './api/images-api';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!inputValue) return;

    const getPage = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const res = await fetchImages(inputValue, page);
        if (res.length === 0) {
          toast.error('Please enter the correct word');
        }
        setImages(prevImages => [...prevImages, ...res]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPage();
  }, [page, inputValue]);

  const handleSubmit = async inputValue => {
    setInputValue(inputValue);
    setPage(1);
    setImages([]);
  };

  const loadMoreImages = async () => {
    setPage(page + 1);
  };

  const openModal = image => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Toaster position="top-right" />
      <Section className="search">
        <SearchBar onSubmit={handleSubmit} />
      </Section>
      <Container>
        <Section className="images">
          {images.length > 0 && (
            <ImageGallery images={images} onImageClick={openModal} />
          )}
        </Section>
        {images.length > 0 && !isLoading && (
          <Section className="loadMore">
            <LoadMoreBtn onClick={loadMoreImages} />
          </Section>
        )}
        {isLoading && (
          <Section className="loading">
            {' '}
            <Loader />
          </Section>
        )}
        {error && (
          <Section className="error">
            {' '}
            <ErrorMessage />
          </Section>
        )}
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
          isModalOpen={isModalOpen}
        />
      </Container>
    </>
  );
};

export default App;
