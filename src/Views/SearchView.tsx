import { useState, type FormEvent, type ReactElement } from 'react'
import '../assets/Search.css'


export const SearchView = (): ReactElement => {
    const [userInput, setUserInput] = useState('');


    function handleSearch(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        console.log("Söker efter " + userInput);
    }

    return(
        <section className="search-page">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder='Search for cocktail' value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
                <button className="material-symbols-outlined" type="submit">search</button>
            </form>
            <article className="search-result-box">
                <h3>Search result</h3>
                <p></p>
                <ul>
                    <li>Drink</li>
                    <li>Cocktail</li>
                    <li>Beer</li>
                </ul>
            </article>
        </section>
    )}