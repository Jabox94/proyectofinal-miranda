import { Link } from "react-router-dom"
import './ItemCard.css'

export default function ItemCard(props) {
  // eslint-disable-next-line react/prop-types
  const { id, img, price, title, brand, category } = props

  return (
    <>
      <img src={img} alt={title} className="itemCard-img" loading="lazy" />
      <div className="info" id={id}>
        <h4 className="info-title">{title}</h4>
        <p className='info-brand'>{brand}</p>
        <p className='info-brand'>{category}</p>
        <strong className="info-price-simbol">$
          <span className="info-price-holder">{price}</span>
        </strong>
      </div >
      <Link
        to={`/productos/${id}`}
        className='button uppercase'
      >Mas información
      </Link>
    </>
  )
}