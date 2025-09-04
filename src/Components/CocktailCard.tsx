import { Link } from 'react-router';
import '../assets/CocktailCard.css'
import type { ICocktail } from './Cocktail';

interface ICocktailCardProps {
    cocktail?: ICocktail;
}

export const CocktailCard = ({cocktail}: ICocktailCardProps) => {

    return(
    <>
        <section className="cocktail-card">
            <h2>{cocktail?.name}</h2>
            <figure>
                <img src={cocktail?.thumbnail}/>
            </figure>
            <div className="see-more-box">
                <Link to={'/cocktailInfo'}>See more</Link>  
                </div>
        </section>  
    </>
)
}