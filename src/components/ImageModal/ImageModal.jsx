import modalCss from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoCloseCircle } from 'react-icons/io5';
import { FcLike } from 'react-icons/fc';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose, isModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      closeTimeoutMS={250}
      className={modalCss.modal}
      style={{
        overlay: {
          overflow: 'auto',
          background: 'rgba(0, 0, 0, .8)',
        },
        content: {
          position: 'relative',
          maxWidth: 1024,
          margin: '40px auto',
        },
      }}
    >
      {image && (
        <>
          <p className={modalCss.autor}>@{image.user.username}</p>
          <IoCloseCircle
            className={modalCss.closeBtn}
            onClick={onClose}
            size="50"
          />
          <img
            className={modalCss.image}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className={modalCss.description}>
            <p className={modalCss.text}>
              {image.alt_description.charAt(0).toUpperCase() +
                image.alt_description.slice(1)}
            </p>
            <p className={modalCss.likes}>
              <FcLike /> {image.likes}
            </p>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
