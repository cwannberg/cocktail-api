import type { ReactElement } from "react"
import '../assets/CocktailInfo.css'
import { useLocation } from 'react-router-dom';

export const CocktailInfo = (): ReactElement => {
    const cocktail = useLocation().state?.cocktail;

    console.log({cocktail});
    return( 
    <>
        <section className="cocktail-info-page">
            <section className="recipe-box">
                <h1>{cocktail?.name}</h1>
                <figure>
                    <img src={cocktail?.thumbnail}/>
                </figure>
                <section className="ingredients-list">
                    <ul>
                        <li>Gurka</li>
                        <li>Majonnäs</li>
                    </ul>
                </section>
                <section className="instructons">
                    <p>Mosa gurkan och blanda med majonnäsen</p>
                </section>
            </section>
        </section>
    </>
    )
}