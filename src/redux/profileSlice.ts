import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./profileActions";

// Define the User type
interface User {
  username: string;
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  address: {
    street: string;
    number: number;
    city: string;
    zipcode: string;
  };
}

// Define the state shape
interface ProfileState {
  user: User | null;
  error: string | null; // Ensure error is typed as a string
}

const initialState: ProfileState = {
  user: null,
  error: null,
};

// Slice for handling profile state
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch user."; // Explicitly a string
      });
  },
});

export default profileSlice.reducer;
