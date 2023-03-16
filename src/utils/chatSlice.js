import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./contants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.message.length > OFFSET_LIVE_CHAT) {
        state.message.splice(0, 1);
      }
      state.message.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
