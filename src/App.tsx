import './assets/App.css'
import { CocktailCard } from './CocktailCard'
import { Header } from './Header'
import { RandomButton } from './RandomButton'
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
