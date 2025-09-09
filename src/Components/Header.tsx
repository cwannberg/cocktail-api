import type { FormEvent } from 'react';
import '../assets/Header.css'
import { SearchComponent } from './SearchComponent';

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
    
    //function handleSearch(event: FormEvent<HTMLFormElement>): void {
        
    

    return (
        <>
        <header>
            <h1>Hey Bartender!</h1>
            <p>Gimme a..</p>
            {/* <div className="search-box">
                <SearchComponent/>
            </div> */}
        </header>
        </>
    )
}