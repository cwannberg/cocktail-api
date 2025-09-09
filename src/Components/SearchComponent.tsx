import type { FormEvent, ReactElement } from "react"


export const SearchComponent = () : ReactElement => {
    function handleSearch(event: FormEvent<HTMLFormElement>): void {
        
    }

    return (
        <>
            <form onSubmit={handleSearch} className="search-form">
                <input className="search-input" type="text" placeholder="Search"/>
                <button type="submit" className="material-symbols-outlined">search</button>
            </form>
        </>
    )
}