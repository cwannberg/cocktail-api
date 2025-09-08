import type { ICocktail } from "../Components/Cocktail";
import { useEffect, useState, type ReactElement } from "react"
import { CocktailCard } from "../Components/CocktailCard"
import { RandomButton } from "../Components/RandomButton"
import { FetchCocktail } from "../Data/FetchRandomCocktail";
import '../assets/App.css'

export const HomeView = (): ReactElement => {
      const [cocktail, setCocktail] = useState<ICocktail>();
    
      const fetchNewCocktail = () => {
        FetchCocktail().then(c => setCocktail(c));
      };
      useEffect(() => {
        fetchNewCocktail();
      },[]);

    return(
        <section className="landing-page">
            <CocktailCard cocktail = {cocktail}/>
            <RandomButton onClick={fetchNewCocktail}/>
        </section>
    )}