import Hd from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"

export default function About() {
  return (
    <>
      <Hd />
      <NavBar />
      <main className="main-about">
        <div className="main-about-container">
          <h1 className="about-title">About us</h1>
          <div className="tab-1">
            <p>
              Somos una familia normal y corriente que un día empezó a soñar con tener su propio supermercado. Hoy ese sueño es posible, y no sólo eso, sino que seguimos con hambre de seguir conquistando cada rincón de tu barrio. Porque somos los divinos, porque somos gasolina, gasolina de verdad.
            </p>
            <img src="https://www.abc.com.py/resizer/b50R9mnK2BPp3vBHz6z1Ka8GQCE=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/NUGIIYJIYJCBBD7OXP5RQBV3AA.jpg" alt="Family picture" />
          </div>
        </div>
      </main>
    </>
  )
}