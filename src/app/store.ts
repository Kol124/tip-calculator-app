import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tipCalculatorReducer from "./slices/tipCalculatorSlice";

export const store = configureStore({
  reducer: {
    tipCalculator: tipCalculatorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
