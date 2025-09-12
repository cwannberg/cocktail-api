import { useEffect, useState, type FormEvent, type ReactElement } from 'react'
import '../assets/Search.css'
import { FetchCocktail } from "../Data/FetchCocktail";
import type { ICocktail } from '../Components/Cocktail';
import { Pagination } from '../Components/Pagination';


export const SearchView = (): ReactElement => {
    const [userInput, setUserInput] = useState('');
    const [cocktails, setCocktails] = useState<ICocktail[]>([]);

          const fetchNewCocktail = (userInput2:string) => {
            FetchCocktail(userInput2).then(c => setCocktails(c));
            cocktails.forEach(function(c:any) {
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
                <h3>Search result:</h3>
            <   Pagination items={cocktails}/>
            </article>
        </section>
    )}