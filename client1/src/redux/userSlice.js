import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  loading: false,
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  currentRole: (JSON.parse(localStorage.getItem("user")) || {}).role || null,
  currentToken: (JSON.parse(localStorage.getItem("user")) || {}).token || null,
  isLoggedIn: false,
  error: null,
  response: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequest: (state) => {
      state.status = "loading";
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
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const {
  authRequest,
  underControl,
  updateCurrentUser,
  stuffUpdated,
  productSuccess,
  getRequest,
  getError,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
