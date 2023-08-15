import MainBanner from "../components/Banners/MainBanner"
import ItemContainer from "../components/ItemContainer/ItemContainer"

export default function Home() {
  const isHome = true
  return (
    <>
      <MainBanner />
      <ItemContainer isHome={isHome} />
    </>
  )
}