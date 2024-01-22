import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  status: "idle",
  loading: false,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentRole: (JSON.parse(localStorage.getItem("user")) || {}).role || null,
  currentToken: (JSON.parse(localStorage.getItem("user")) || {}).token || null,
  isLoggedIn: false,
  error: null,
  response: null,

  responseReview: null,
  responseProducts: null,
  responseSellerProducts: null,
  responseSpecificProducts: null,
  responseDetails: null,
  responseSearch: null,
  responseCustomersList: null,

  productData: [],
  sellerProductData: [],
  specificProductData: [],
  productDetails: {},
  productDetailsCart: {},
  filteredProducts: [],
  customersList: [],
};
const updateCartDetailsInLocalStorage = (cartDetails) => {
  const currentUser = JSON.parse(localStorage.getItem("user")) || {};
  currentUser.cartDetails = cartDetails;
  localStorage.setItem("user", JSON.stringify(currentUser));
};

export const updateShippingDataInLocalStorage = (shippingData) => {
  const currentUser = JSON.parse(localStorage.getItem("user")) || {};
  const updatedUser = {
    ...currentUser,
    shippingData: shippingData,
  };
  localStorage.setItem("user", JSON.stringify(updatedUser));
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.status = "loading";
    },
    authSuccess: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.currentUser = action.payload;
      state.currentRole = action.payload;
      state.currentToken = action.payload;
      state.status = "success";
      state.response = null;
      state.error = null;
      state.isLoggedIn = true;
    },
    authFailed: (state, action) => {
      state.status = "failed";
      state.response = action.payload;
      state.error = null;
    },
    authError: (state, action) => {
      state.status = "error";
      state.response = null;
      state.error = action.payload;
    },
    underControl: (state) => {
      state.status = "added";
      state.response = null;
    },
    stuffUpdated: (state) => {
      state.status = "updated";
      state.response = null;
      state.error = null;
    },
    productSuccess: (state, action) => {
      state.productData = action.payload;
      state.responseProducts = null;
      state.loading = false;
      state.error = null;
    },
    getRequest: (state) => {
      state.loading = true;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductsFailed: (state, action) => {
      state.productData = action.payload;
      state.responseProducts = null;
      state.loading = false;
      state.error = null;
    },
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
      state.responseSearch = null;
      state.loading = false;
      state.error = null;
    },
    getSearchFailed: (state, action) => {
      state.responseSearch = action.payload;
      state.loading = false;
      state.error = null;
    },
    productDetailsSuccess: (state, action) => {
      state.productDetails = action.payload;
      state.responseDetails = null;
      state.loading = false;
      state.error = null;
    },
    getProductDetailsFailed: (state, action) => {
      state.responseDetails = action.payload;
      state.loading = false;
      state.error = null;
    },
    addToCart: (state, action) => {
      const existingProduct = state.currentUser.cartDetails.find(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const newCartItem = { ...action.payload };
        state.currentUser.cartDetails.push(newCartItem);
      }
      updateCartDetailsInLocalStorage(state.currentUser.cartDetails);
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.currentUser.cartDetails.find(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          const index = state.currentUser.cartDetails.findIndex(
            (cartItem) => cartItem._id === action.payload._id
          );
          if (index !== -1) {
            state.currentUser.cartDetails.splice(index, 1);
          }
        }
      }

      updateCartDetailsInLocalStorage(state.currentUser.cartDetails);
    },
    updateFailed: (state, action) => {
      state.status = "failed";
      state.responseReview = action.payload;
      state.error = null;
    },
    authLogout: (state) => {
      localStorage.removeItem("user");
      state.status = "idle";
      state.loading = false;
      state.currentUser = null;
      state.currentRole = null;
      state.currentToken = null;
      state.error = null;
      state.response = true;
      state.isLoggedIn = false;
    },
    isTokenValid: (state) => {
      const decodedToken = jwtDecode(state.currentToken);

      if (state.currentToken && decodedToken.exp * 1000 > Date.now()) {
        state.isLoggedIn = true;
      } else {
        localStorage.removeItem("user");
        state.currentUser = null;
        state.currentRole = null;
        state.currentToken = null;
        state.status = "idle";
        state.response = null;
        state.error = null;
        state.isLoggedIn = false;
      }
    },
    getCustomersListFailed: (state, action) => {
      state.responseCustomersList = action.payload;
      state.loading = false;
      state.error = null;
    },
    customersListSuccess: (state, action) => {
      state.customersList = action.payload;
      state.responseCustomersList = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  authRequest,
  authSuccess,
  authFailed,
  authError,
  authLogout,
  underControl,
  updateCurrentUser,
  stuffUpdated,
  productSuccess,
  getRequest,
  getError,
  getSearchFailed,
  getProductsFailed,
  setFilteredProducts,
  productDetailsSuccess,
  getProductDetailsFailed,
  addToCart,
  updateFailed,
  isTokenValid,
  getCustomersListFailed,
  customersListSuccess,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
