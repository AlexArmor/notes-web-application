import { Outlet } from 'react-router-dom';
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AppBar } from '../../components/AppBar/AppBar';
import { useState, useEffect } from 'react';
import { NoteFormModal } from '../../components/NoteFormModal/NoteFormModal';
import { getNotes } from '../../services/api';
import { createNote } from '../../services/api';

export function Home() {
    const [note, setNote] = useState(null);
    const [allNotes, setAllNotes] = useState([]);
    const [isOpenNoteFormModal, setIsOpenNoteFormModal] = useState(false);

    useEffect(() => {
        getNotes().then((data) => {
            setAllNotes(data)
            console.log(data);
        })
    }, [note])

    const modalHandler = (bool) => {
        setIsOpenNoteFormModal(bool);
    };

    const formSubmit = (noteObj) => {
        createNote(noteObj).then(() => setNote(noteObj))
    };

    return (
        <>
            {isOpenNoteFormModal && <NoteFormModal formSubmit={formSubmit} modalHandler={modalHandler} />}
            <AppBar modalHandler={modalHandler} />
            <div className="main">
                <Sidebar notes={allNotes} />
                <Outlet />
            </div>
        </>
    );
}