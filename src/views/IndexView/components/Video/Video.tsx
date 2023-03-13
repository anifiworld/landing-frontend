import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';

const Video = (): JSX.Element => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <ModalVideo 
        channel={'youtube'}
        youtube={{
          autoplay: 1,
          mute: 1
        }}
        isOpen={isOpen} 
        videoId={'FAvcqe-h2Og'}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Video;
