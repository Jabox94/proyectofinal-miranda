export default function ItemCard(props) {
  const { key, thumbnail, price, title, brand } = props

  return (
    <div className="itemCard" id={key}>
      <img src={thumbnail} alt={title} className="itemCard-img" />
      <div className="info">
        <h4 className="info-title">{title}</h4>
        <p className='info-brand'>{brand}</p>
        <strong className="info-price-simbol">$<span className="info-price-holder">{price}</span></strong>
      </div>
      <button className='button'>Agregar al carrito</button>
    </div>
  )
}