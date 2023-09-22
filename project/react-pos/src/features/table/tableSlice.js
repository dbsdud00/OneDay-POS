import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    t_seq: 0,
    t_usable: true,
  },
  reducers: {
    tableClick: (state) => {
      state.t_usable = !state.t_usable;
      console.log("클릭함" + state.t_usable);
    },
    incrementByAmount: (state, action) => {
      state.t_usable = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { tableClick, incrementByAmount } = tableSlice.actions;

export default tableSlice.reducer;
