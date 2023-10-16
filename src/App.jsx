import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart/Cart"
import Menu from "./pages/Menu/Menu"
import Pizza from "./pages/Menu/Pizza/Pizza"
import SideDish from "./pages/Menu/Pizza/SideDish"
import Dessert from "./pages/Menu/Pizza/Dessert"
import Drinks from "./pages/Menu/Pizza/Drinks"
import Checkout from "./pages/Checkout/Checkout"
import OrderTracking from "./pages/OrderTracking/OrderTracking"
import OrderTrackingDetail from "./pages/OrderTracking/OrderTrackingDetail"

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
        <Route path="sides" element={<SideDish/>}/>
        <Route path="dessert" element={<Dessert/>}/>
        <Route path="drinks" element={<Drinks/>}/>
      </Route>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/order-tracking" element={<OrderTracking/>}/>
      <Route path="/order-tracking-details/:id" element={<OrderTrackingDetail/>}/>
    </Routes>
    </>
  )
}

export default App
