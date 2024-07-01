import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/auth";
export const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.signup(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
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
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
