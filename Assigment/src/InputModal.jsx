import React, { useState,useContext } from 'react';
import styles from './InputModal.module.css';
import UserDataContext from './Context/UserDataContext';

const InputModal = ({ isOpen, setIsOpen, user}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const { setData } = useContext(UserDataContext);
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    let chunks = [];

    recorder.ondataavailable = (event) => chunks.push(event.data);
    recorder.onstop = () => {
      const audioBlob = new Blob(chunks, { type: "audio/wav" });
      setAudioURL(URL.createObjectURL(audioBlob));
    };

    recorder.start();
    setMediaRecorder(recorder);
    setAudioChunks(chunks);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };
  const handleSubmit = async() => {
    try{
      let d=await fetch('http://localhost:8000/new',{
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({title,date,content,user})
      })
      d=await d.json()
      setData(d)

    }catch(err){alert(err)}
    setTitle('');
    setDate('');
    setContent('');
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              ✖
            </button>
            <h2 className={styles.modalHeading}>Enter Details</h2>

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.titleInput}
            />
            
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={styles.dateInput}
            />

            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.contentInput}
            />

            <div>
                <button onClick={startRecording} className={styles.record}>Start Recording</button>
                <button onClick={stopRecording} className={styles.record}>Stop Recording</button>
                {audioURL && <audio src={audioURL} controls />}
            </div>

            <button onClick={handleSubmit} className={styles.submitButton}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputModal;
