import { useState, useEffect } from 'react'
// JSON
import { getProductData } from '../JSON/getData'
// Components
import DetailsContainer from '../components/Details/DetailsContainer'
import { useParams } from 'react-router-dom'

export default function ItemDetail() {
  const [product, setProduct] = useState([])
  const { id } = useParams()


  const requestProduct = async () => {
    const response = await getProductData(id)
    console.table(response)
    setProduct(response)
  }

  useEffect(() => {
    requestProduct()
  }, [])


  return (
    <>
      <DetailsContainer info={product} />
    </>
  )

}