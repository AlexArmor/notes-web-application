import { SearchBox } from '../SearchBox/SearchBox';

export function AppBar({ modalHandler }) {
    return <div className="appbar">
        <div className="button-options">
            <button type="button" className="button-add" onClick={() => { modalHandler(true) }}>+</button>
            <button type="button" className="button-remove">-</button>
            <button type="button" className="button-edit">E</button>
        </div>
        <SearchBox />
    </div>
}