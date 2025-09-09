import '../assets/App.css'
import { Header } from './Header'
import { Outlet } from 'react-router'

function App() {
  
  return (
    <>
        <main>
          <Header/>
          <Outlet/>
        </main>
    </>
  )
}

export default App
