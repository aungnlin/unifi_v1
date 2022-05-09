// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchCount } from './counterAPI';
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Setting initial state
const initialState = {
  rewardsBalance: 200,
};

// Setting start of slice creation : Initial State + Reducers (Actions & Selectors)
export const rewardsSlice = createSlice({
  name: "rewards",
  initialState,

  reducers: {
    // Add on Reducers
    // updateRewardsBalance: (state, action) => {
    //   state.rewardsBalance = action.payload;
    // },
    updateRewardsBalance: (state) => {
      state.rewardsBalance = state.rewardsBalance + 5;
    },
  },
});

// Actions (Dispatchers)
export const { updateRewardsBalance } = rewardsSlice.actions;

// Selectors
export const selectRewardsBalance = (state: RootState) =>
  state.rewards.rewardsBalance;

export default rewardsSlice.reducer;
