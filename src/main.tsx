import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/index.css'
import App from './Components/App.tsx'
import { CocktailInfo } from './Views/CocktailInfo.tsx'
import { HomeView } from './Views/Homeview.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/cocktailInfo" element={<CocktailInfo/>}/>
                <Route path="/" element={<HomeView/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
