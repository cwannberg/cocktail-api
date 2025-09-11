import type { FormEvent } from 'react';
import '../assets/Header.css'
import { SearchComponent } from './SearchComponent';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
   

    return (
        <>
        <Link to="/" className="header-link"><header>
            <h1>Hey Bartender!</h1>
            <p>Gimme a..</p>
            <div className="search-box">
                <SearchComponent/>
            </div>
        </header></Link>
        </>
    )
}