import { Route, Routes } from 'react-router-dom'
// JSON
import ProductList from './JSON/ProductList.json'
//Pages
import Home from './pages/Home'
import Store from './pages/store'
import About from './pages/about'
import Details from './pages/details'
// Styles
import './App.css'
import { useEffect, useState } from 'react'

export default function App() {
  const [reference, setReference] = useState([])
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const getData = async () => {
      const listado = ProductList
      setProductos(listado)
      setReference(listado.id)
    }
    return () => {
      getData()
    }
  }, [productos, reference])


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Store />} />
        <Route path='/sobrenosotros' element={<About />} />
        <Route path='/productos/:reference' element={<Details productos={productos} />} />
      </Routes>
    </>
  )
}