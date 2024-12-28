import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Url, errorMsg } from "@/interfaces";

// Define an interface for the user data (matching the server response)
interface UserData {
  id: number;
  username: string;
  email: string;
  type: string;
  role: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

// Define the initial state of the slice
const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMsg: '',
  data: [] as UserData[],  // Change CustomerDta to UserData to reflect the new structure
};

// Async thunk to fetch all users from the server
export const getAllToolsFn = createAsyncThunk(
  'GetAllTools',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${Url}/tool/All`, {
        // Add headers or token logic if necessary
        // headers: {
        //     Authorization: `Bearer ${token}`,
        // },
      });

      return res.data;  // Server response is returned as the payload
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.response?.data.message || errorMsg);
      }
      return rejectWithValue(errorMsg);
    }
  }
);

// Create slice for managing the user data
export const getAllToolsSlice = createSlice({
  name: 'getAllTools',
  reducers: {
    resetAllTools: () => initialState,  // Reset state to initial state
  },
  initialState,
  extraReducers(builder) {
    builder.addCase(getAllToolsFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));
    builder.addCase(getAllToolsFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,  // Save the response data to the state
    }));
    builder.addCase(getAllToolsFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: String(action.payload),  // Set the error message if request fails
    }));
  },
});

// Export actions from the slice
export const { resetAllTools } = getAllToolsSlice.actions;
