import { useState, useEffect } from 'react'
// Firebase
import { getData, getCategoryData } from '../../service/getData'
// Components
import Spinner from '../Spinner/Spinner'
// Syles
import './ItemContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export default function ItemContainer(props) {

  const { isHome } = props
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { reference } = useParams();

  useEffect(() => {

    async function requestProduct() {
      setIsLoading(true)
      let response = reference
        ? await getCategoryData(reference)
        : await getData()
      const resSliced = response.slice(1, 5)

      //Si es la pagina principal, se corta el array a solo 4 productos
      isHome ? setProducts(resSliced) : setProducts(response)
      setIsLoading(false)
    }

    requestProduct()
  }, [reference, isHome])

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