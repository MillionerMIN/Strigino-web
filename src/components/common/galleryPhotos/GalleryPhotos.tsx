import './galleryPhotos.scss';

import { CloseButton, Modal } from 'react-bootstrap';

const GalleryPhotos = (props: GalleryPhotosType) => {
  const { photos, onHide } = props;
  const content = photos.map((photo, i) => (
    <img
      key={i}
      src={photo}
      alt={photo}
      className={`gallery-photos__item gallery-photos__item${i}`}
    />
  ));
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-window__header">
        <div className="modal-window__buttonClose">
          <CloseButton onClick={onHide} />
        </div>
      </div>
      <Modal.Body>
        <div className="gallery-photos">{content}</div>
      </Modal.Body>
    </Modal>
  );
};

type GalleryPhotosType = {
  show: boolean;
  onHide: () => void;
  photos: string[];
};

export default GalleryPhotos;
