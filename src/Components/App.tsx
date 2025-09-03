import { useEffect, useState } from 'react'
import './assets/App.css'
import { CocktailCard } from './CocktailCard'
import { Header } from './Header'
import { RandomButton } from './RandomButton'
import { FetchCocktail } from '../RandomCocktail'
import type { ICocktail } from './Cocktail'

function App() {

      const [cocktail, setCocktail] = useState<ICocktail>();
  
      useEffect(() => {
         FetchCocktail().then((c => setCocktail(c)));
      },[]);
      
  return (
    <>
        <main>
          <Header cocktailName = {cocktail?.name}/>
          <section className="landing-page">
            <CocktailCard cocktail = {cocktail}/>
            <RandomButton/>
          </section>
        </main>
    </>
  )
}

export default App
