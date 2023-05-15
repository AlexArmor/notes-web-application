export function SearchBox() {
    return (<div className="search-box">
        <form>
            <input className="input-search" name="name" type="text" />
            <button type="submit" className="btn-search">Search</button>
        </form>
    </div>)
}