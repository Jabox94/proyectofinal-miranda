import { useState } from 'react'
// Components
import ButtonComponent from '../Buttons/ButtonComponent'
// css
import './ItemCounter.css'

export default function ItemCounter() {

  const [quantity, setQuantity] = useState('1')

  return (
    <div className="details-inputs">
      <ButtonComponent
        onClick={
          () => {
            let state = quantity
            let newState = ++state
            newState >= 6 ? --newState : newState
            setQuantity(newState)
          }
        }
        id='increaseInput'
        styles='button input-btn'
        content={'+'}
      />
      <input
        type="number"
        name="QuantityCounter"
        className='button quantity-btn'
        readOnly
        min={0}
        max={5}
        placeholder={quantity}
      />
      <ButtonComponent
        onClick={
          () => {
            let state = quantity
            let newState = --state
            newState <= 0 ? ++newState : newState
            setQuantity(newState)
          }
        }
        id='decreaseInput'
        styles='button input-btn'
        content={'-'}
      />
    </div>
  )
}