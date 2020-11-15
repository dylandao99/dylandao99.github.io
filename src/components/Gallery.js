import React, {useState, useCallback} from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, {Modal, ModalGateway} from 'react-images';

function LightboxGallery(props){
	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	  }, []);

	  const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	  };

	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	return (
		<>
		<Gallery photos={props.photoList} onClick={openLightbox}/>
		<ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={props.photoList.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
	  </>
	);
};

export default LightboxGallery;
