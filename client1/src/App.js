import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/seller" element={<SellerDashboard />} />
          <Route
            path="/customerlogin"
            element={<AuthenticationPage mode="Login" role="Customer" />}
          />
          <Route
            path="/customerregister"
            element={<AuthenticationPage mode="Register" role="Customer" />}
          />
          <Route
            path="/sellerregister"
            element={<AuthenticationPage mode="Register" role="Seller" />}
          />
          <Route
            path="sellerlogin"
            element={<AuthenticationPage mode="Login" role="Seller" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
