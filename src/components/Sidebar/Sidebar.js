import { ListItem } from '../ListItem/ListItem'

export function Sidebar({ notes }) {
    return (
        <div className="sidebar">
            <ListItem notes={notes} />
        </div>
    )
}