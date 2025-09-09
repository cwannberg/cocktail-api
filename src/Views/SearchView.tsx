import { useEffect, useState, type FormEvent, type ReactElement } from 'react'
import '../assets/Search.css'
import { FetchCocktail } from "../Data/FetchCocktail";
import type { ICocktail } from '../Components/Cocktail';


export const SearchView = (): ReactElement => {
    const [userInput, setUserInput] = useState('');
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);

          const fetchNewCocktail = (userInput2:string) => {
            FetchCocktail(userInput2).then(c => setCocktails(c));
            console.log("userinput " + userInput2);
            cocktails.forEach(function(c:any) {
                console.log("fetchNewCocktail: " + c.name)
            });
          };
          useEffect(() => {
        },[]);
        
        function handleSearch(event: FormEvent<HTMLFormElement>): void {
            event.preventDefault();
            fetchNewCocktail(userInput);
    }

    return(
        <section className="search-page">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder='Search for cocktail' value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
                <button className="material-symbols-outlined" type="submit">search</button>
            </form>
            <article className="search-result-box">
                <h3>Search result</h3>
                <ul>
                    {cocktails.slice(0, 10).map(c => (
                    <li key={c.id}>{c.name}</li>
                ))}
                </ul>
            </article>
        </section>
    )}