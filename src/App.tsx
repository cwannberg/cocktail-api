import './assets/App.css'
import { CocktailCard } from './CocktailCard'
import { Header } from './Header'
import { RandomButton } from './RandomButton'
import { FetchCocktail } from './RandomCocktail'

function App() {

  return (
    <>
        <main>
          <Header/>
          <section className="landing-page">
            <CocktailCard/>
            <RandomButton/>
          </section>
        </main>
    </>
  )
}

export default App
