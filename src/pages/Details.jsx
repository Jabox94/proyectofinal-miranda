import Hd from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"

export default function Details(props) {
  const { productos } = props
  return (
    <>
      <Hd />
      <NavBar />
    </>
  )
}