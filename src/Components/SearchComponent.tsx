import { useState, type FormEvent, type ReactElement } from "react"
import { SearchView } from "../Views/SearchView"


export const SearchComponent = () : ReactElement => {
    const [userInput, setUserInput] = useState("");
    function handleSearch(event: FormEvent<HTMLFormElement>): void {

    }

    return (
        <>
            <form onSubmit={handleSearch} className="search-form">
                <input className="search-input" type="text" placeholder="Search"/>
                <input type="text" placeholder='Search for cocktail' value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
                <button type="submit" className="material-symbols-outlined">search</button>
            </form>
        </>
    )
}