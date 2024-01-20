import axios from "axios";
import {
  getError,
  getRequest,
  productSuccess,
  stuffUpdated,
  updateCurrentUser,
} from "./userSlice";

export const addStuff = (fields) => async (dispatch) => {
  try {
    const result = await axios.post(
      `http://localhost:8080/api/CreateNewProduct`,
      fields,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch(stuffUpdated());
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.get(`http://localhost:8080/api/getProducts`);
    dispatch(productSuccess(result.data));
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
