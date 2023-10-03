import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart/Cart"
import Menu from "./pages/Menu/Menu"
import Pizza from "./pages/Menu/Pizza/Pizza"
import Discount from "./pages/Menu/Pizza/Discount"
import SideDish from "./pages/Menu/Pizza/SideDish"
import Dessert from "./pages/Menu/Pizza/Dessert"
import Drinks from "./pages/Menu/Pizza/Drinks"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/menu" element={<Menu/>}>
        <Route path="pizza" element={<Pizza/>}/>
        <Route path="discount" element={<Discount/>}/>
        <Route path="sides" element={<SideDish/>}/>
        <Route path="dessert" element={<Dessert/>}/>
        <Route path="drinks" element={<Drinks/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
