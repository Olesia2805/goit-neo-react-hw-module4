import modalCss from './ImageModal.module.css';
import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const ImageModal = ({ image, onClose, isModalOpen }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onClose}
      closeTimeoutMS={250}
      className={modalCss.modal}
    >
      {image && (
        <div className={modalCss.content}>
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
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
