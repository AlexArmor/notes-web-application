import { Outlet } from 'react-router-dom';
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AppBar } from '../../components/AppBar/AppBar';
import { useState } from 'react';
import { NoteFormModal } from '../../components/NoteFormModal/NoteFormModal';

export function Home() {
    const [isOpenNoteFormModal, setIsOpenNoteFormModal] = useState(false);
    const modalHandler = (bool) => {
        setIsOpenNoteFormModal(bool);
    };

    return (
        <>
            {isOpenNoteFormModal && <NoteFormModal modalHandler={modalHandler} />}
            <AppBar modalHandler={modalHandler} />
            <div className="main">
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}