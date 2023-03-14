import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videodataSlice from "./videoDataSlice";
// configureStore takes reducer
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    videoData: videodataSlice,
  },
});

export default store;
