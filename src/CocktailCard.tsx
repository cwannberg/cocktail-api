import { useEffect, useState } from 'react';
import './assets/CocktailCard.css'
import { FetchCocktail } from './RandomCocktail';
import type { ICocktail } from './Cocktail';

export const CocktailCard = () => {
    const [cocktail, setCocktail] = useState<ICocktail | null>(null);

    useEffect(() => {
       FetchCocktail().then((c => setCocktail(c)));
    },[]);


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