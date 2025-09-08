import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/index.css'
import App from './Components/App.tsx'
import { CocktailView } from './Views/CocktailIView.tsx'
import { HomeView } from './Views/Homeview.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/cocktailView" element={<CocktailView/>}/>
                <Route path="/" element={<HomeView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
