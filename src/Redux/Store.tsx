// In store.ts
import { configureStore } from "@reduxjs/toolkit";
import {createToolsReducer} from "./Slice/CreateSlice/createProductSlice"; // Correct named import
import {LoginSlice} from "./Slice/CreateSlice/RegisterSlice"; // Correct import for LoginSlice
import registerSlice from "./Slice/CreateSlice/LoginSlice"; // Default import for registerSlice

const store = configureStore({
  reducer: {
    createTools: createToolsReducer, // Use the named export here
    user: LoginSlice.reducer,        // Correct import for LoginSlice
    LoginStore: registerSlice,  // Correct import for registerSlice
  },
});

export default store;

// Define types for TypeScript (optional but recommended)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
