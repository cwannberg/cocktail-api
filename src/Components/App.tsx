import { useEffect, useState } from 'react'
import '../assets/App.css'
import { CocktailCard } from './CocktailCard'
import { Header } from './Header'
import { RandomButton } from './RandomButton'
import { FetchCocktail } from '../RandomCocktail'
import type { ICocktail } from './Cocktail'
import { Outlet } from 'react-router'



function App() {
  // const [cocktail, setCocktail] = useState<ICocktail>();

  // const fetchNewCocktail = () => {
  //   FetchCocktail().then(c => setCocktail(c));
  // };
  // useEffect(() => {
  //   fetchNewCocktail();
  // },[]);
  
  return (
    <>
        <main>
          {/* <Header cocktailName = {cocktail?.name}/> */}
          <Header></Header>
          <Outlet/>
          {/* <section className="landing-page">
            <CocktailCard cocktail = {cocktail}/>
            <RandomButton onClick={fetchNewCocktail}/>
          </section> */}
        </main>
    </>
  )
}


export default App
