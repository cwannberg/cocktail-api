import '../assets/App.css'
import { Header } from './Header'
import { Outlet } from 'react-router'

function App() {
  
  return (
    <>
        <main>
          {/* <Header cocktailName = {cocktail?.name}/> */}
          <Header></Header>
          <Outlet/>
        </main>
    </>
  )
}

export default App
