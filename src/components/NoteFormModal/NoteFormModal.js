// import { createNote } from '../../services/api';
import { useEffect } from 'react';

export function NoteFormModal({ modalHandler, formSubmit }) {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                modalHandler(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalHandler]);

    const handleBackdrop = event => {
        if (event.target === event.currentTarget) {
            modalHandler(false)
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const text = event.target.elements.text.value;
        const note = {
            title,
            text,
        };
        formSubmit(note);
        event.target.reset();
        modalHandler(false);
    }
    return (
        <div className='backdrop' onClick={handleBackdrop}>
            <div className="form-modal">
                <div data-close className="form-modal__close" onClick={() => modalHandler(false)}>&times;</div>
                <form onSubmit={handleSubmit}>
                    <label className="form-label">
                        Title
                        <input type="text" className="form-input" name="title" />
                    </label>
                    <label className="form-label">
                        Text
                        <textarea className="textarea" name="text" />
                    </label>
                    <button type="submit" className="submit-button">Save</button>
                </form>
            </div>
        </div>
    )
};