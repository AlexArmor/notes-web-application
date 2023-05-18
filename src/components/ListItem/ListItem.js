import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNotes } from '../../services/api';
// import items from '../../data.json';

export function ListItem() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getNotes().then((data) => {
            setNotes(data)
            console.log(data);
        })

    }, [])
    return (
        <>
            {(notes.length > 0) ?
                (<div className="list-sidebar">
                    <ul>
                        {notes.map(({ id, updated_at, values }) => {
                            const newTitle = (values.dcUmoojqvlz6GppColW518.length > 20) ? (values.dcUmoojqvlz6GppColW518.slice(0, 19) + '...') : values.dcUmoojqvlz6GppColW518;
                            const newText = (values.bPzr7cQmjcqiT0auCMt8oy.length > 20) ? (values.bPzr7cQmjcqiT0auCMt8oy.slice(0, 19) + '...') : values.bPzr7cQmjcqiT0auCMt8oy;
                            return (<li key={id} className="list-sidebar__item">
                                <NavLink to={`/${id}`}>
                                    <h1 className="item-title">{newTitle}</h1>
                                    <p>{updated_at}</p>
                                    <span>{newText}</span>
                                </NavLink>
                            </li>)
                        })}
                    </ul>
                </div>) : <p>no entries to display</p>
            }
        </>
    )
}