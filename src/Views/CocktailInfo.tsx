import type { ReactElement } from "react"
import '../assets/CocktailInfo.css'
import { useLocation } from 'react-router-dom';

export const CocktailInfo = (): ReactElement => {
    const cocktail = useLocation().state?.cocktail;

    console.log({cocktail});
    return( 
    <>
        <section className="cocktail-info-page">
            <section className="recipe-wrapper">
                <section className="recipe-container">
                    <figure className="recipe-img">
                        <img className="cocktail-thumb" src={cocktail?.thumbnail}/>
                    </figure>
                    <div className="h1-wrapper">
                        <h1>{cocktail?.name}</h1>
                    </div>
                </section>
                <article className="instruction-and-ingredients">
                    <section className="ingredients-list">
                        <ul>
                            <li>Gurka</li>
                            <li>Majonnäs</li>
                        </ul>
                    </section>
                    <section className="instructions">
                        <p>Mosa gurkan och blanda med majonnäsen</p>
                    </section>
                </article>
            </section>
        </section>
    </>
    )
}