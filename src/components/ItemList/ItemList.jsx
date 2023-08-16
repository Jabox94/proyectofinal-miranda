// Components
import ItemCard from './ItemCard/ItemCard'
import CategoryNav from '../ItemContainer/CategoryNav/CategoryNav'

//CSS
import './ItemList.css'

export default function ItemList({ products, isHome }) {
  return (
    <>
      {isHome ? null : <CategoryNav />}

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
    </>
  )
}