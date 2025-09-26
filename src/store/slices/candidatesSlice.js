import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [], // candidate objects
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.list.push(action.payload);
    },
    resumeInterview: (state, action) => {
      const candidate = state.list.find(c => c.id === action.payload);
      if (candidate) candidate.isResumed = true;
    },
    restartInterview: (state, action) => {
      const candidate = state.list.find(c => c.id === action.payload);
      if (candidate) {
        candidate.answers = [];
        candidate.currentQuestion = 0;
      }
    },
  },
});

export const { addCandidate, resumeInterview, restartInterview } = candidatesSlice.actions;
export default candidatesSlice.reducer;
