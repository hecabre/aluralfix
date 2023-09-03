import { createSlice } from "@reduxjs/toolkit";

export const tabAnimationSlice = createSlice({
  name: "tabsAnimation",
  initialState: [
    { name: "Series", clicked: true },
    { name: "Movies", clicked: false },
    { name: "Streaming", clicked: false },
  ],
  reducers: {
    setSerie: (state, action) => {
      state.forEach((tab) => {
        tab.clicked = false;
      });
      state[0].clicked = true;
    },
    setMovie: (state, action) => {
      state.forEach((tab) => {
        tab.clicked = false;
      });
      state[1].clicked = true;
    },
    setStreaming: (state, action) => {
      state.forEach((tab) => {
        tab.clicked = false;
      });
      state[2].clicked = true;
    },
  },
});

export default tabAnimationSlice.reducer;
export const { setMovie, setSerie, setStreaming } = tabAnimationSlice.actions;
