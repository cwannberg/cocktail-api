import { useEffect, useState, type ReactElement } from "react"
import { CocktailCard } from "../Components/CocktailCard"
import { RandomButton } from "../Components/RandomButton"
import '../assets/App.css'
import { FetchCocktail } from "../RandomCocktail";
import type { ICocktail } from "../Components/Cocktail";

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