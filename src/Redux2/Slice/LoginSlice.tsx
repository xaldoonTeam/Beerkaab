import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

import { Url, errorMsg } from "../../interfaces";

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
  accountType: string
}


interface LoginState {
  data: UserLoginData | null;
  isloading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMsg: string;
}

const initialState: LoginState = {
  data: null,
  isloading: false,
  isError: false,
  isSuccess: false,
  errorMsg: "",
};

export const LoginFn = createAsyncThunk<UserLoginData, { email: string; password: string }>(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`${Url}/user/login`, data);

     
      return res.data as UserLoginData; // Ensure the returned data matches the UserLoginData type
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
  },
  extraReducers: (builder) => {
    builder.addCase(LoginFn.pending, (state) => {
      state.isloading = true;
      state.isError = false;
      state.isSuccess = false;
      state.errorMsg = "";
    });

    builder.addCase(LoginFn.fulfilled, (state, action: PayloadAction<UserLoginData>) => {
      state.isloading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });

    builder.addCase(LoginFn.rejected,(_,action)=>({
        ...initialState,
        isError:true,
        errorMsg: String(action.payload)
       }))
  },
});

export const { reset } = LoginSlice.actions;
export default LoginSlice.reducer;
