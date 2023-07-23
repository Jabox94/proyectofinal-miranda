import { Link } from 'react-router-dom'
// JSON
import ProductList from '../../JSON/ProductList.json'
const iterador = ProductList.productos

// Layouts
import ItemCard from "./ItemCard/ItemCard"

export default function ItemContainer() {
  return (
    <>
      <div className="itemcontainer-container">
        {ProductList.productos.length > 0 &&
          <div className="items-slider">
            {iterador.map((item) => (
              <Link key={item.id} to={`/productos/${item.id}`} className='itemCard'>
                {
                  < ItemCard
                    key={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    price={item.price}
                    brand={item.brand}
                  />
                }
              </Link>
            ))}
          </div>
        }
      </div >
    </>
  )
}