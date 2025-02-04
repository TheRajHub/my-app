import styles from './MainContent.module.css';
import NoteCard from './NoteCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { useState,useContext } from 'react';
import Model from './Model'
import UserDataContext from './Context/UserDataContext';
import InputModal from './InputModal';

function MainContent() {
    const { data } = useContext(UserDataContext);
    const [click, setClick] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [edit,setEdit]=useState(false)
    function onDelete() {}
    function onRename() {}

    return ( 
        <>
            <div className={styles.searchContainer}>
                <input type="text" placeholder=" Search..." className={styles.searchBar} />

                {click && (
                    <Model click={click} setClick={setClick} note={selectedNote} />
                )}
                <InputModal isOpen={edit} setIsOpen={setEdit} user={data.user}/>
                {!click && !edit && (
                    <>
                        <div className={styles.notesContainer}>
                            {data.notes.map((item)=>(
                                <NoteCard key={item.id} note={item} onDelete={onDelete} onRename={onRename} onClick={()=>{
                                    setClick(true)
                                    setSelectedNote(item);
                                }}/>
                            ))}
                        </div>

                        <div className={styles.write}>
                            <form onSubmit={(e)=>{handlesubmit(e)}}>
                                <FontAwesomeIcon icon={faImage} className={styles.pic} />
                                <div className={styles.text} onClick={()=>{setEdit(true)}}></div>
                                <button className={styles.record}>Start Recording</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default MainContent;
