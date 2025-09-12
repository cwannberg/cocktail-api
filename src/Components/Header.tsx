import '../assets/Header.css'
import { Link } from 'react-router-dom';

interface IHeaderProps {
  cocktailName?: string;
}

export const Header = (props: IHeaderProps) => {
   
    return (
        <>
        <Link to="/" className="header-link"><header>
            <h1>Cocktails</h1>
            <Link to={'/searchView'}><div className="search-box">Search</div></Link>  
            
        </header></Link>
        </>
    )
}