import type { ReactElement } from "react"
import '../assets/CocktailView.css'
import { useLocation } from 'react-router-dom';
import { IngredientsList} from '../Components/Ingredients';

export const CocktailView = (): ReactElement => {
    const cocktail = useLocation().state?.cocktail;

    console.log({cocktail});
    return( 
    <>
        <section className="cocktail-info-page">
            <section className="recipe-wrapper">
                <section className="recipe-container">
                    <div className="h1-wrapper">
                        <h1>{cocktail?.name}</h1>
                    </div>
                    <figure className="recipe-img">
                        <img className="cocktail-thumb" src={cocktail?.thumbnail}/>
                    </figure>
                </section>
                <article className="instruction-and-ingredients">
                    <section className="ingredients-list">
                        <h3>Ingredients</h3>
                        <IngredientsList cocktail={cocktail}/>
                        <p>Prefered glass: {cocktail?.glass}</p>
                    </section>
                    <section className="instructions">
                        <p>{cocktail?.instructions}</p>
                    </section>
                </article>
            </section>
        </section>
    </>
    )
}