import { useState, useEffect } from 'react'
// JSON
import { getProductData } from '../service/getData'
// Components
import DetailsContainer from '../components/Details/DetailsContainer'
import { useParams } from 'react-router-dom'

export default function ItemDetail() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    async function requestProduct() {
      setIsLoading(true)
      const response = await getProductData(id)
      console.table(response)
      setProduct(response)
      setIsLoading(false)
    }
    requestProduct()
  }, [id, isLoading])


  return (
    <>
      <DetailsContainer info={product} isLoading={isLoading} />
    </>
  )

}