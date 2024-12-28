import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Url, errorMsg } from "@/interfaces";

export interface UpdateVendorData {
  product_name: string;
  vendor_address: string;
  vendor_email: string;
  vendor_phone: string;
  vendor_id:string
}

const initialState = {
  data: null,
  IsSuccess: false,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

export const UpdateProductFn = createAsyncThunk(
  'UpdateProduct',
  async (data:any, { rejectWithValue }) => {
    try {
      const Company_Id = JSON.parse(localStorage.getItem("userInfo")!).company_id;
     
      const productUpDta = {
        ...data,
        id: data.product_id
      };

      const response = await axios.put(`${Url}/products/${productUpDta.id}`, productUpDta);
      

      return response.data;
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data.message || errorMsg);
      return rejectWithValue(errorMsg);
    }
  }
);

export const UpdateProductSlice = createSlice({
  name: 'UpdateProduct',
  initialState,
  reducers: { resetProductUpdates: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(UpdateProductFn.pending, (state) => {
        state.isLoading = true;
        state.IsSuccess = false;
        state.isError = false;
        state.errorMsg = '';
      })
      .addCase(UpdateProductFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.IsSuccess = true;
        state.data = action.payload;
      })
      .addCase(UpdateProductFn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.payload as string;
      });
  },
});

export const { resetProductUpdates } = UpdateProductSlice.actions;