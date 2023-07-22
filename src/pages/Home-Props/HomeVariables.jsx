// JSON
import ProductList from '../../JSON/ProductList.json'
const iterador = ProductList.productos.slice(0, 5)

// Layouts
import ItemCard from '../../components/ItemContainer/ItemCard/ItemCard'

export default function HomeVariables() {
  return (
    <>
      <div className="itemcontainer-container">
        {ProductList.length > 0 && <h3 className="itemcontainer-title">Hot features</h3>}
        <div className="items-slider">
          {iterador.map((item) => (
            < ItemCard
              key={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
    </>
  )
}