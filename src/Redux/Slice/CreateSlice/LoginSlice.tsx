import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from "axios";
import { Url, errorMsg, userRegisterInterface } from '../../../interfaces';

interface StateInterface {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMsg: string;
}

const initialState: StateInterface = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMsg: '',
};

export const RegisterFn = createAsyncThunk(
  'user/register',
  async (data: userRegisterInterface, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${Url}/user/create`, data);
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message);
      }
      return rejectWithValue(errorMsg);
    }
  }
);

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    resetRegisterState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterFn.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.errorMsg = '';
    });
    builder.addCase(RegisterFn.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.errorMsg = '';
    });
    builder.addCase(RegisterFn.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.errorMsg = String(action.payload);
    });
  },
});

export default registerSlice.reducer;
export const { resetRegisterState } = registerSlice.actions;
