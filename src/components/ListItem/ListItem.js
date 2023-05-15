import { NavLink } from 'react-router-dom';
import items from '../../data.json';

export function ListItem() {
    return (
        <div className="list-sidebar">
            <ul>
                {items.map(({ id, date, title, text }) => {
                    const newTitle = (title.length > 20) ? (title.slice(0, 19) + '...') : title;
                    return (<li key={id} className="list-sidebar__item">
                        <NavLink to={`/${id}`}>
                            <h1 className="item-title">{newTitle}</h1>
                            <p>{date}</p>
                            <span>{text}</span>
                        </NavLink>
                    </li>)
                })}
            </ul>
        </div>
    )
}