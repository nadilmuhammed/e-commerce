import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <BrowserRouter>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
