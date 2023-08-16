// Components
import './DetailsContainer.css'
import ButtonComponent from '../Buttons/ButtonComponent'
import ItemCounter from './ItemCounter/ItemCounter'
import Spinner from '../Spinner/Spinner'

// eslint-disable-next-line react/prop-types
export default function DetailsContainer({ info }) {
  // eslint-disable-next-line react/prop-types
  const { img, title, brand, price, id, description, category, isLoading } = info

  return (
    <>
      {isLoading
        ? <Spinner />
        : <div className='item-details-container'>
          <div className='details-img-container'>
            <img
              src={img}
              alt="Product img"
              className='item-details-img'
            />
          </div>
          <div className="info full" id={id}>
            <h4 className="info-title">{title}</h4>
            <p className='info-brand'>{brand}</p>
            <p className='info-brand'>{category}</p>
            <strong className="info-price-simbol">$
              <span className="info-price-holder">{price}</span>
            </strong>
            <p className="info-description">
              {description}
            </p>

            <ItemCounter />
            <ButtonComponent
              styles='button to-cart-btn'
              content={'Agregar al carrito'}
            />
          </div >
        </div>}
    </>
  )
}