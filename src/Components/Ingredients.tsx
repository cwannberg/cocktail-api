import type { ReactElement } from "react"
import type { ICocktail } from "./Cocktail";


interface IngredientsListProps {
    cocktail: ICocktail;
}

export const IngredientsList = ({cocktail}: IngredientsListProps): ReactElement =>{

    return (
    <>
    <ul>
        {cocktail.ingredients.map((item, i) => (
        <li 
            key={i}> 
            {item.measure ? `${item.measure}` : ""} {item.ingredient}
        </li>
      ))}
    </ul>
    </>
    )
}