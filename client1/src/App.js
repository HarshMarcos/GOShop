import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AuthenticationPage from "./pages/AuthenticationPage";
import Products from "./components/Products";
import ViewProduct from "./pages/ViewProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/view/:id" element={<ViewProduct />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route
            path="/Customerlogin"
            element={<AuthenticationPage mode="login" role="Customer" />}
          />
          <Route
            path="/Customerregister"
            element={<AuthenticationPage mode="register" role="Customer" />}
          />
          <Route
            path="/Sellerregister"
            element={<AuthenticationPage mode="register" role="Seller" />}
          />
          <Route
            path="Sellerlogin"
            element={<AuthenticationPage mode="login" role="Seller" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
