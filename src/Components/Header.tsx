import type { FormEvent } from 'react';
import '../assets/Header.css'

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
    
    function handleSearch(event: FormEvent<HTMLFormElement>): void {
        alert("tjoho");
    }

    return (
        <>
        <header>
            <h1>Hey Bartender!</h1>
            <p>Gimme a..</p>
            <div className="search-box">
                <form onSubmit={handleSearch} className="search-form">
                    <input className="search-input" type="text" placeholder="Search"/>
                    <button type="submit" className="material-symbols-outlined">search</button>
                </form>
            </div>
        </header>
        </>
    )}