import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RoutesNames } from './constants'
import Pocetna from './pages/Pocetna'
import TereniPregled from './pages/tereni/TereniPregled'
import TereniDodaj from './pages/tereni/TereniDodaj'
import TereniPromjena from './pages/tereni/TereniPromjena'


function App() {

  
  return (
    <>
      <NavBarEdunova />
      <Routes>
        <Route path={RoutesNames.HOME} element={<Pocetna />} />

        <Route path={RoutesNames.TEREN_PREGLED} element={<TereniPregled />} />
        <Route path={RoutesNames.TEREN_NOVI} element={<TereniDodaj />} />
        <Route path={RoutesNames.TEREN_PROMJENA} element={<TereniPromjena />} />
      </Routes>
    </>
  )
}

export default App
