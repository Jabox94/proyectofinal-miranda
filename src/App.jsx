import { Route, Routes } from 'react-router-dom';
// Components
import Hd from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
//Pages
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Checkout from './pages/Checkout';
//Components
import ItemDetail from './pages/ItemDetail';
// Styles
import './App.css';

export default function App() {
  return (
    <>
      <Hd />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Store />} />
        <Route path='/sobrenosotros' element={<About />} />
        <Route path='/productos/:id' element={<ItemDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/categoria/:reference' element={<Store />} />

        <Route path='*' element={<h1 className='err-404'>Error 404: Page not found</h1>} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}