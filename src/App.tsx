import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer"
import { Route, Routes } from "react-router-dom"
import { ShopCart } from "./Shop-cart/ShopCart"
import Description from "./components/Description"


function App() {

  return (
    <>
      <NavBar />
      {/* <MainContainer /> */}
      <Routes>
        <Route path="*" element={<MainContainer />} />
        <Route path="/" element={<MainContainer />} />
        <Route path="/shop" element={<ShopCart />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </>
  )
}

export default App
