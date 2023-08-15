export default function Checkout() {
  return (
    <main className="checkout-main">
      <h1 className="w-full checkout-title">Checkout</h1>
      <form className="checkout-form">
        <label className="checkout-label" htmlFor="checkout-nombre">
          Nombre
          <input type="text" className="checkout-input" id="checkout-nombre" />
        </label>

        <label className="checkout-label" htmlFor="checkout-apellido">
          Apellido
          <input type="text" className="checkout-input" id="checkout-apellido" />
        </label>

        <label className="checkout-label" htmlFor="checkout-contacto">
          Telefono/Celular
          <input type="text" className="checkout-input" id="checkout-contacto" />
        </label>

        <label className="checkout-label" htmlFor="checkout-email">
          Email
          <input type="text" className="checkout-input" id="checkout-email" />
        </label>

        <label className="checkout-label" htmlFor="checkout-tarjeta">
          Tarjeta de credito
          <input type="text" className="checkout-input" id="checkout-tarjeta" />
        </label>

        <button className="button warning">Enviar</button>
      </form>
    </main>
  )
}