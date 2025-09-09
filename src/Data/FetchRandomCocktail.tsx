import type { ICocktail } from '../Components/Cocktail.tsx';
import { mapRawCocktailData } from '../map/mapRawCocktailData.ts';

export const FetchRandomCocktail = async (): Promise<ICocktail> => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await res.json();
    const randomCocktail = mapRawCocktailData(data.drinks[0])
    return randomCocktail;
};
