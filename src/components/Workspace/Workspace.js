import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getNoteById } from '../../services/api';

export function Workspace() {
    const { idItem } = useParams();
    const [note, setNote] = useState(null);
    useEffect(() => {
        getNoteById(idItem).then(data => {
            setNote(data);
        });
    }, [idItem]);
    if (!note) {
        return;
    }

    const date = note.updated_at;
    const title = note.values.dcUmoojqvlz6GppColW518;
    const text = note.values.bPzr7cQmjcqiT0auCMt8oy;

    return (
        <div className="workspace">
            <h1 className="workspace-date">{date}</h1>
            <h2 className="workspace-title">{title}</h2>
            <p className="workspace-text">{text}</p>
        </div>
    )
}