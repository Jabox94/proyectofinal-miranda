import { useState, useEffect } from 'react'

// JSON
import getData from '../../JSON/getData'

// Components
import ItemCard from "./ItemCard/ItemCard"
import Spinner from '../Spinner/Spinner'
// Syles
import './ItemContainer.css'

export default function ItemContainer(props) {
  const { isHome } = props
  const [products, setProducts] = useState([])
  const [isSpinner, setIsSpinner] = useState(false)

  const requestProduct = async () => {
    const response = await getData()
    const resSliced = response.slice(1, 5)

    //Si es la pagina principal, se corta el array a solo 4 productos
    isHome ? setProducts(resSliced) : setProducts(response)
  }

  useEffect(() => {
    setIsSpinner(true)

    setTimeout(() => {
      setIsSpinner(false)
      requestProduct()
    }, 1000)

  }, [])

  return (
    <>
      {isSpinner ?
        <Spinner />
        :
        <div className="itemcontainer-container">
          {products.length > 0 &&
            <div className="items-slider">
              {products.map(({ id, img, title, price, brand, category }) => (
                <div
                  key={id}
                  className='itemCard'
                >
                  {
                    < ItemCard
                      id={id}
                      img={img}
                      title={title}
                      price={price}
                      brand={brand}
                      category={category}
                    />
                  }
                </div>
              ))}
            </div>
          }
        </div >
      }
    </>
  )
}