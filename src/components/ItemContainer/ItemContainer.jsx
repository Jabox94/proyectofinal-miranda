import { useState, useEffect } from 'react'

// JSON
import getData from '../../JSON/getData'

// Components
import Spinner from '../Spinner/Spinner'
// Syles
import './ItemContainer.css'
import ItemList from './ItemList/ItemList'

export default function ItemContainer(props) {
  const { isHome } = props
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const requestProduct = async () => {
    const response = await getData()
    const resSliced = response.slice(1, 5)

    //Si es la pagina principal, se corta el array a solo 4 productos
    isHome ? setProducts(resSliced) : setProducts(response)
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      requestProduct()
    }, 500)

  }, [])

  return (
    <>
      {isLoading ?
        <Spinner />
        :
        < ItemList products={products} isHome={isHome} />
      }
    </>
  )
}