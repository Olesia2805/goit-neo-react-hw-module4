import galleryCss from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={galleryCss.listCards}>
      {images.map(image => (
        <li
          className={galleryCss.listItem}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
