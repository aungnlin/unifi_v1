import { createSlice } from "@reduxjs/toolkit";
import fakeExpenseList from "../ListOfTransactions/fakeExpenseList";
import { RootState } from "../../app/store";

const input_ASM = 500;
const thisMonthTrans = fakeExpenseList.filter((trans) =>
  trans.date.includes("-Aug")
);
const input_TSM = thisMonthTrans.reduce((total, item) => {
  return Number(total) + Number(item.amount);
}, 0);
const input_RSM = Number(input_ASM) - Number(input_TSM);
const input_PBM = 200;
const input_CL = Math.ceil((Number(input_RSM) + Number(input_PBM)) / 10) * 10;

// Setting initial state
const initialState = {
  TotalBalance: 5200,
  PBM: input_PBM,
  AvailableBalance: 5000,
  SAM: 3000,
  AS: 2000,
  ASM: input_ASM,
  TSM: 100,
  RSM: input_RSM,
  CL: input_CL,
  NoOfMonths: 4,
  MonthlyNeeds: 500,
  FutureExpenses: 600,
  CurrentMonth: 8,
  TargetMonth: 12,
};

// Setting start of slice creation : Initial State + Reducers (Actions & Selectors)
export const cfmSlice = createSlice({
  name: "cfm",
  initialState,

  reducers: {
    // Add on Reducers
    updateSAM: (state, action) => {
      state.SAM = action.payload;
    },
    updateAS: (state, action) => {
      state.AS = action.payload;
    },
    updateASM: (state, action) => {
      state.ASM = action.payload;
    },
    updateRSM: (state, action) => {
      state.RSM = action.payload;
    },
    updatePBM: (state, action) => {
      state.PBM = action.payload;
    },
    updateCL: (state, action) => {
      state.CL = action.payload;
    },
    updateTargetMonth: (state, action) => {
      state.TargetMonth = action.payload;
    },
  },
});

// Actions (Dispatchers)
export const {
  updateSAM,
  updateAS,
  updateASM,
  updateRSM,
  updatePBM,
  updateCL,
  updateTargetMonth,
} = cfmSlice.actions;

// Selectors
export const selectTotalBalance = (state: RootState) => state.cfm.TotalBalance;
export const selectbalance = (state: RootState) => state.cfm.AvailableBalance;
export const selectSAM = (state: RootState) => state.cfm.SAM;
export const selectAS = (state: RootState) => state.cfm.AS;
export const selectASM = (state: RootState) => state.cfm.ASM;
export const selectRSM = (state: RootState) => state.cfm.RSM;
export const selectPBM = (state: RootState) => state.cfm.PBM;
export const selectTSM = (state: RootState) => state.cfm.TSM;
export const selectCL = (state: RootState) => state.cfm.CL;
export const selectCurrentMonth = (state: RootState) => state.cfm.CurrentMonth;
export const selectTargetMonth = (state: RootState) => state.cfm.TargetMonth;

export default cfmSlice.reducer;
