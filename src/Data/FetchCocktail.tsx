import type { ICocktail } from '../Components/Cocktail.tsx';
import { mapRawCocktailData } from '../map/mapRawCocktailData.ts';

export const FetchCocktail = async (userInput: string): Promise<ICocktail[]> => {
    
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(userInput)}`)
    const data = await res.json();
    const cocktails = data.drinks.map(mapRawCocktailData);
    return cocktails;
}