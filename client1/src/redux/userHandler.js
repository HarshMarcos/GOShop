import axios from "axios";
import {
  authError,
  authFailed,
  authRequest,
  authSuccess,
  customersListSuccess,
  getCustomersListFailed,
  getDeleteSuccess,
  getError,
  getFailed,
  getProductDetailsFailed,
  getRequest,
  getSearchFailed,
  getSellerProductsFailed,
  getSpecificProductsFailed,
  productDetailsSuccess,
  productSuccess,
  sellerProductSuccess,
  setFilteredProducts,
  specificProductSuccess,
  stuffUpdated,
  updateCurrentUser,
  updateFailed,
} from "./userSlice";

export const authUser = (fields, role, mode) => async (dispatch) => {
  dispatch(authRequest());

  try {
    const result = await axios.post(
      `http://localhost:8080/api/${role}${mode}`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (result.data.role) {
      dispatch(authSuccess(result.data));
    } else {
      dispatch(authFailed(result.data.message));
    }
  } catch (error) {
    dispatch(authError(error));
  }
};

export const addStuff = (fields) => async (dispatch) => {
  try {
    const result = await axios.post(
      `http://localhost:8080/api/CreateNewProduct`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (result.data.message) {
      dispatch(authFailed(result.data.message));
    } else {
      dispatch(stuffUpdated());
    }
  } catch (error) {
    dispatch(authError(error));
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.get(`http://localhost:8080/api/getProducts`);
    if (result.data.message) {
    } else {
      dispatch(productSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const updateCustomer = (fields, id) => async (dispatch) => {
  dispatch(updateCurrentUser(fields));

  const newFields = { ...fields };
  delete newFields.token;

  try {
    await axios.put(
      `http://localhost:8080/api/CustomerUpdate/${id}`,
      newFields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch(stuffUpdated());
  } catch (error) {
    dispatch(getError(error));
  }
};

export const getSearchedProducts = (address, key) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `http://localhost:8080/api/${address}/${key}`
    );
    if (result.data.message) {
      dispatch(getSearchFailed(result.data.message));
    } else {
      dispatch(setFilteredProducts(result.data));
    }
  } catch (error) {}
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `http://localhost:8080/api/getProductDetail/${id}`
    );
    if (result.data.message) {
      dispatch(getProductDetailsFailed(result.data.message));
    } else {
      dispatch(productDetailsSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError(error));
  }
};

export const updateStuff = (fields, id, address) => async (dispatch) => {
  try {
    const result = await axios.put(
      `http://localhost:8080/api/${address}/${id}`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (result.data.message) {
      dispatch(updateFailed(result.data.message));
    } else {
      dispatch(stuffUpdated());
    }
  } catch (error) {}
};

export const getCustomers = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `http://localhost:8080/api/${address}/${id}`
    );

    if (result.data.message) {
      dispatch(getCustomersListFailed(result.data.message));
    } else {
      dispatch(customersListSuccess(result.data));
    }
  } catch (error) {}
};

export const addStuff1 = (address, fields) => async (dispatch) => {
  try {
    const result = await axios.post(
      `http://localhost:8080/api/${address}`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (result.data.message) {
      dispatch(authFailed(result.data.message));
    } else {
      dispatch(stuffUpdated());
    }
  } catch (error) {
    dispatch(authError(error));
  }
};

export const getSpeicificProducts = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `http://localhost:8080/api/${address}/${id}`
    );
    if (result.data.message) {
      dispatch(getSpecificProductsFailed(result.data.message));
    } else {
      dispatch(specificProductSuccess(result.data));
    }
  } catch (error) {
    dispatch(getError());
  }
};

export const getProductsbySeller = (id) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.get(
      `http://localhost:8080/api/getSellerProducts/${id}`
    );
    if (result.data.message) {
      dispatch(getSellerProductsFailed(result.data.message));
    } else {
      dispatch(sellerProductSuccess(result.data));
    }
  } catch (error) {}
};

export const deleteStuff = (id, address) => async (dispatch) => {
  dispatch(getRequest());

  try {
    const result = await axios.delete(
      `http://localhost:8080/api/${address}/${id}`
    );
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getDeleteSuccess());
    }
  } catch (error) {
    dispatch(getError(error));
  }
};
