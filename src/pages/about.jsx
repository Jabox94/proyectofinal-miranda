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
              We are an ordinary family that one day began to dream of having our own supermarket. Today that dream is possible, and not only that, but we are still hungry to continue conquering every corner of your neighborhood. Because we are the divine ones, because we are gasoline, real gasoline.
            </p>
            <img src="https://www.abc.com.py/resizer/b50R9mnK2BPp3vBHz6z1Ka8GQCE=/fit-in/770x495/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/abccolor/NUGIIYJIYJCBBD7OXP5RQBV3AA.jpg" alt="Family picture" />
          </div>
        </div>
      </main>
    </>
  )
}