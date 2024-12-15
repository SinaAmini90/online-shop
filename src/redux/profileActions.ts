import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUser = createAsyncThunk("profile/fetchUser", async () => {
  const response = await fetch(`https://fakestoreapi.com/users/1`);
  if (!response.ok) throw new Error("Failed to fetch user details.");
  const data = await response.json();
  return data;
});
