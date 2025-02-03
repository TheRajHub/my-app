import React, { useState } from 'react';
import styles from './Modal.module.css'; // Import the CSS module

const Modal = ({click,setClick,note}) => {

  const handleCloseModal = () => {
    setClick(false);
  };

  return (
    <div>
      {click && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleCloseModal} className={styles.closeButton}>
              ✖
            </button>
            <h2 className={styles.modalHeading}>{note.title}</h2>
            <p className={styles.modalDate}>Date: {note.data}</p>

            <div className={styles.audioContainer}>
              <audio controls className={styles.audioPlayer}>
                <source src="your-audio-file.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <p className={styles.modalText}>
              {note.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;