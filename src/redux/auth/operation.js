import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/auth";
// import axios from "axios";
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };
export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
  // async (credentials, thunkAPI) => {
  //   try {
  //     const res = await axios.post("/users/signup", credentials);
  //     // After successful registration, add the token to the HTTP header
  //     setAuthHeader(res.data.token);
  //     return res.data;
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);
export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
  // async (credentials, thunkAPI) => {
  //   try {
  //     const res = await axios.post("/users/login", credentials);
  //     // After successful login, add the token to the HTTP header
  //     setAuthHeader(res.data.token);
  //     return res.data;
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    if (!auth.token) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  // async (_, thunkAPI) => {
  // try {
  //   await axios.post("/users/logout");
  //   // After a successful logout, remove the token from the HTTP header
  //   clearAuthHeader();
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.message);
  // }
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
