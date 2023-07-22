import Hd from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import MainBanner from "../components/Banners/MainBanner"
import HomeVariables from "./Home-Props/HomeVariables"

export default function Home() {
  return (
    <>
      <Hd />
      <NavBar />
      <MainBanner />
      <HomeVariables />
    </>
  )
}