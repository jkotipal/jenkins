import Cart from "./pages/Cart";
import { CartProvider } from "./components/CartContext";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductSIngle from "./components/ProductSIngle";
import { ProductRings } from "./components/ProductRings";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import ProductItems from "./components/ProductItems";

function App() {
  const user = false;
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productitems" element={<ProductItems />} />
          <Route path="/productRings" element={<ProductRings />} />
          <Route path="/productsingle" element={<ProductSIngle />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
