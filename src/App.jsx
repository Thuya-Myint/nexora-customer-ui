import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Product from "./pages/Product"
import Order from "./pages/Order"
import User from "./pages/User"
import Cart from "./pages/Cart"
import NotFound from './pages/NotFound'
import Event from "./pages/Event"
import Layout from "./layouts/Layout"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/event" element={<Event />} />
          <Route path="/order" element={<Order />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App