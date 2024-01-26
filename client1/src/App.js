import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AuthenticationPage from "./pages/AuthenticationPage";
import Products from "./components/Products";
import ViewProduct from "./pages/ViewProduct";
import Logout from "./pages/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/userHandler";
import { isTokenValid } from "./redux/userSlice";
import Profile from "./pages/customer/pages/Profile";
import CustomerSearch from "./pages/customer/pages/CustomerSearch";
import CheckoutOrder from "./pages/customer/pages/CheckoutOrder";
import CheckoutAftermath from "./pages/customer/pages/CheckoutAftermath";
import CustomerOrders from "./pages/customer/pages/CustomerOrders";
import ViewOrder from "./pages/customer/pages/ViewOrder";

function App() {
  const dispatch = useDispatch();

  const { isLoggedIn, currentToken, currentRole, productData } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getProducts());
    if (currentToken) {
      dispatch(isTokenValid());
    }
  }, [dispatch, currentToken]);

  return (
    <BrowserRouter>
      {!isLoggedIn && currentRole === null && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/Products"
              element={<Products productData={productData} />}
            />
            <Route path="/product/view/:id" element={<ViewProduct />} />
            <Route
              path="/Customerregister"
              element={<AuthenticationPage mode="Register" role="Customer" />}
            />
            <Route
              path="/Customerlogin"
              element={<AuthenticationPage mode="Login" role="Customer" />}
            />
            <Route
              path="/Sellerregister"
              element={<AuthenticationPage mode="Register" role="Seller" />}
            />
            <Route
              path="/Sellerlogin"
              element={<AuthenticationPage mode="Login" role="Seller" />}
            />
          </Routes>
        </>
      )}
      {isLoggedIn && currentRole === "Customer" && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/Products"
              element={<Products productData={productData} />}
            />
            <Route path="/product/view/:id" element={<ViewProduct />} />
            <Route path="/Search" element={<CustomerSearch mode="Mobile" />} />
            <Route
              path="/ProductSearch"
              element={<CustomerSearch mode="Desktop" />}
            />

            <Route path="/Checkout" element={<CheckoutOrder />} />
            <Route path="/product/buy/:id" element={<CheckoutOrder />} />
            <Route path="/Aftermath" element={<CheckoutAftermath />} />

            <Route path="/Orders" element={<CustomerOrders />} />
            <Route path="/order/view/:id" element={<ViewOrder />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </>
      )}

      {isLoggedIn &&
        (currentRole === "Seller" || currentRole === "Shopcart") && (
          <>
            <SellerDashboard />
          </>
        )}
    </BrowserRouter>
  );
}

export default App;
