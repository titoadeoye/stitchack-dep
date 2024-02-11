import axios from "axios";
import { getFromStorage, logout } from "../constants";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}/users`,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(undefined, (error) => {
  if (
    error.response.status === 401 ||
    error.response.data.message === "401 Unauthorized"
  ) {
    logout();
  }
});

export const getOrders = (id) =>
  api
    .get(`/${id}/orders`, {
      headers: {
        Authorization: `Bearer ${getFromStorage("token")}`
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });

export const addOrder = (id, data) =>
  api
    .post(`/${id}/orders`, data, {
      headers: {
        Authorization: `Bearer ${getFromStorage("token")}`
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });

export const getTodaysOrders = (id) =>
  api
    .get(`/${id}/orders/today`, {
      headers: {
        Authorization: `Bearer ${getFromStorage("token")}`
      }
    })
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
