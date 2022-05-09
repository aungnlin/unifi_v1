import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  // NowDate: new Date(2020, 7, 1),
  NowDate: 2,
};

export const testingSlice = createSlice({
  name: "testing",
  initialState,

  reducers: {
    // Add on Reducers
    updateNowDate: (state, action) => {
      state.NowDate = action.payload;
    },
  },
});

// Actions (Dispatchers)

export const { updateNowDate } = testingSlice.actions;

// Selectors
export const selectNowDate = (state: RootState) => state.testing.NowDate;

export default testingSlice.reducer;
