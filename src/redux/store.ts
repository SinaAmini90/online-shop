import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
