import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface CreateToolData {
  name: string;
  description: string;
  price: string;
  location: string;
  category: string;
  organization_id: number;
  image: File | string; // Adjust as per how you handle images
}

const initialState = {
  data: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMsg: "",
};

// Async thunk to create a new tool
export const createToolFn = createAsyncThunk(
  "tools/create",
  async (toolData: CreateToolData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/create", toolData, {
        headers: { "Content-Type": "application/json" },
      });
      return response.data; // Expecting the tool data in the response
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message || "Failed to create tool");
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

export const toolSlice = createSlice({
  name: "tools",
  initialState,
  reducers: {
    resetToolState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createToolFn.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMsg = "";
      })
      .addCase(createToolFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(createToolFn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.payload as string;
      });
  },
});

export const { resetToolState } = toolSlice.actions;
export default toolSlice.reducer;
