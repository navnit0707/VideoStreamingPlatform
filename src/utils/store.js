import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import videodataSlice from "./videoDataSlice";
// configureStore takes reducer
const store = configureStore({
  reducer: {
    //slice store name : slice  component name
    app: appSlice,
    search: searchSlice,
    videoData: videodataSlice,
    chat: chatSlice,
  },
});

export default store;
