import modalCss from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';

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
          <IoMdCloseCircleOutline
            className={modalCss.closeBtn}
            onClick={onClose}
            size="50"
          />
          <img
            className={modalCss.image}
            src={image.urls.full}
            alt={image.alt_description}
          />
          <p className={modalCss.description}>
            {image.alt_description.charAt(0).toUpperCase() +
              image.alt_description.slice(1)}
          </p>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
