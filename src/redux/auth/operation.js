import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/auth";
export const signup = createAsyncThunk(
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
      const { data: result } = await api.login(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
