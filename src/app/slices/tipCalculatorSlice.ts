import { RootState } from "../../app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ResultType = {
  amount: number;
  total: number;
};

export interface TipCalculatorState {
  bill: number;
  tip: number;
  numberOfPeople: number;
  result: ResultType;
}

const initialState: TipCalculatorState = {
  bill: 0,
  tip: 0,
  numberOfPeople: 0,
  result: {
    amount: 0,
    total: 0,
  },
};

export const tipCalculatorSlice = createSlice({
  name: "tipCalculator",
  initialState,
  reducers: {
    setBill: (state, action: PayloadAction<number>) => {
      state.bill = action.payload;
    },
    setTip: (state, action: PayloadAction<number>) => {
      state.tip = action.payload;
    },
    setNumberOfPeople: (state, action: PayloadAction<number>) => {
      state.numberOfPeople = action.payload;
    },
    setResult: (state, action: PayloadAction<ResultType>) => {
      state.result = action.payload;
    },
  },
});

export const { setBill, setTip, setNumberOfPeople, setResult } =
  tipCalculatorSlice.actions;

export const selectTipCalculator = (state: RootState) => state.tipCalculator;

export default tipCalculatorSlice.reducer;
