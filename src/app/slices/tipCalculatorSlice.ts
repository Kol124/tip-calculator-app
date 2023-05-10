import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ResultType = {
  amount: number;
  total: number;
};

export interface TipCalculatorState {
  result: ResultType;
}

const initialState: TipCalculatorState = {
  result: {
    amount: 0,
    total: 0,
  },
};

export const tipCalculatorSlice = createSlice({
  name: "tipCalculator",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<ResultType>) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = tipCalculatorSlice.actions;

export const selectTipCalculator = (state: RootState) => state.tipCalculator;

export default tipCalculatorSlice.reducer;
