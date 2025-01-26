import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Url, errorMsg } from "../../../interfaces";

interface UserLoginData {
  user: {
    id: number;
    username: string;
    email: string;
    type: { id: number; type: "User" | "Organization" };
    role: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
  accountType: string;
}

interface LoginState {
  data: UserLoginData | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMsg: string;
}

const initialState: LoginState = {
  data: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMsg: "",
};

export const LoginFn = createAsyncThunk<UserLoginData, { email: string; password: string }>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${Url}/user/login`, data);
      return res.data as UserLoginData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || errorMsg);
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: () => initialState,
    logout: (state) => {
      state.data = null;
      state.isSuccess = false;
      state.isError = false;
      state.errorMsg = "";
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("accountType");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginFn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.errorMsg = "";
      })
      .addCase(LoginFn.fulfilled, (state, action: PayloadAction<UserLoginData>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(LoginFn.rejected, (_, action) => ({
        ...initialState,
        isError: true,
        errorMsg: String(action.payload),
      }));
  },
});

export const { reset, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
