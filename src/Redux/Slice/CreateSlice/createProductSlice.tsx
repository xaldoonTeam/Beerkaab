// In createProductSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Url } from "../../../interfaces";

// Define the interface for Tools data
export interface CreateToolsData {
  name: string;
  description: string;
  price: string;
  location: string;
  category: string;
  organization_id: number;
  image: string;
}

const initialState = {
  data: [] as CreateToolsData[],
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMsg: "",
};

// Create the async thunk to handle Tools creation
export const createToolsFn = createAsyncThunk(
  "createTools",
  async (data: CreateToolsData[], { rejectWithValue }) => {
    try {
      const Company_Id = JSON.parse(localStorage.getItem("userInfo")!).company_id;
      const ToolsData = data.map((tool) => ({
        ...tool,
        company_id: Company_Id,
      }));
      const response = await axios.post(`${Url}/products`, ToolsData);

      // Check if the response data is an array and matches the expected structure
      if (Array.isArray(response.data)) {
        return response.data; // If it's already an array of CreateToolsData
      }

      // If the response is not an array, adjust here if necessary
      return [response.data]; // Wrap it in an array if necessary
    } catch (error) {
      console.error(error);
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

// Create the slice
export const createToolsSlice = createSlice({
  name: "createTools",
  initialState,
  reducers: {
    resetToolsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createToolsFn.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.errorMsg = "";
      })
      .addCase(createToolsFn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Make sure that the payload is an array of CreateToolsData
        state.data = action.payload;
      })
      .addCase(createToolsFn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMsg = action.payload as string;
      });
  },
});

export const { resetToolsState } = createToolsSlice.actions;
export const createToolsReducer = createToolsSlice.reducer;
