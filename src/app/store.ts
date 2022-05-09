import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../services/counter/counterSlice";
import totalSpendReducer from "../services/totalSpend/totalSpendSlice";
import cfmReducer from "../services/CFM/cfmSlice";
import rewardsReducer from "../services/Rewards/rewardsSlice";
import testingReducer from "../services/Testing/testingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    totalSpend: totalSpendReducer,
    cfm: cfmReducer,
    rewards: rewardsReducer,
    testing: testingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
// Use the two codes below if you use combineReducer instead
// const rootReducer = combineReducers({})
// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
