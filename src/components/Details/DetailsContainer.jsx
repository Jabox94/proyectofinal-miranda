import { useState } from 'react'
import './DetailsContainer.css'

// eslint-disable-next-line react/prop-types
export default function DetailsContainer({ info }) {
  // eslint-disable-next-line react/prop-types
  const { img, title, brand, price, id, description, category } = info

  const [quantity, setQuantity] = useState('1')

  return (
    <div className='item-details-container'>
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

        <div className="details-inputs">
          <button
            onClick={
              () => {
                let state = quantity
                let newState = ++state
                newState >= 6 ? --newState : newState
                setQuantity(newState)
              }
            }
            id='increaseInput'
            className='button input-btn'
          >+</button>
          <input
            type="number"
            name="QuantityCounter"
            className='button quantity-btn'
            readOnly
            min={0}
            max={5}
            placeholder={quantity}
          />
          <button
            onClick={
              () => {
                let state = quantity
                let newState = --state
                newState <= 0 ? ++newState : newState
                setQuantity(newState)
              }
            }
            id='decreaseInput'
            className='button input-btn'
          >-
          </button>
        </div>
        <button className='button to-cart-btn'>
          Agregar al carrito
        </button>
      </div >
    </div>
  )
}