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
                <img src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/medium"/>
            </figure>
            <div className="see-more-box">
                <a href="./">See more</a>
                </div>
        </section>  
    </>
)
}