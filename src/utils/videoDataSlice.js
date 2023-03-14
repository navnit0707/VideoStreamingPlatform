import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
  name: "videoData",
  initialState: [],
  reducers: {
    setVideoData: (state, action) => {
      // state = [];
      state = state.push(action.payload);
    },
  },
});

export const { setVideoData } = videoDataSlice.actions;

export default videoDataSlice.reducer;
