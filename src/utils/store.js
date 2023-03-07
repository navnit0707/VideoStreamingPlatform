import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
// configureStore takes reducer
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
