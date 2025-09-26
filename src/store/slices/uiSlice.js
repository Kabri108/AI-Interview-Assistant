import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  activeTab: "interviewee",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setShowModal, setActiveTab } = uiSlice.actions;

// ✅ Add default export here
export default uiSlice.reducer;
