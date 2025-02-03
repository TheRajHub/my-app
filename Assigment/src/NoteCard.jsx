import React, { useState } from "react";
import styles from "./NoteCard.module.css";
import { FaCopy, FaTrash, FaEdit } from "react-icons/fa";

function NoteCard({ onClick,note, onDelete, onRename }) {
  const [newTitle, setNewTitle] = useState(note.title);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${note.title}\n${note.content}`);
    alert("Note copied to clipboard!");
  };

  const handleRename = () => {
    const updatedTitle = prompt("Enter new title:", newTitle);
    if (updatedTitle) {
      setNewTitle(updatedTitle);
      onRename(note.id, updatedTitle);
    }
  };

  return (
    <div className={styles.noteCard} onClick={()=>{onClick()}}>
      <div className={styles.noteDate}>{note.date}</div>
      <h2 className={styles.noteTitle}>{newTitle}</h2>
      <p className={styles.noteContent}>{note.content.substring(0, 100)}...</p>
      <div className={styles.noteActions}>
        <FaCopy className={styles.icon} onClick={handleCopy} title="Copy" />
        <FaEdit className={styles.icon} onClick={handleRename} title="Rename" />
        <FaTrash className={`${styles.icon} ${styles.delete}`} onClick={() => onDelete(note.id)} title="Delete" />
      </div>
    </div>
  );
}

export default NoteCard;
