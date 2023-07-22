import { Route, Routes } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Store from './pages/store'
import About from './pages/about'
// Styles
import './App.css'


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
