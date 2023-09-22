import { createSlice } from "@reduxjs/toolkit";
import { TableItem } from "../../comps/TableItem";
let tableSeq = 0;
export const tablesSlice = createSlice({
  name: "tables",
  initialState: [
    {
      t_seq: 1,
      t_useable: true,
    },
    {
      t_seq: 2,
      t_useable: true,
    },
    {
      t_seq: 3,
      t_useable: true,
    },
    {
      t_seq: 4,
      t_useable: true,
    },
    {
      t_seq: 5,
      t_useable: true,
    },
    {
      t_seq: 6,
      t_useable: true,
    },
    {
      t_seq: 7,
      t_useable: true,
    },
    {
      t_seq: 8,
      t_useable: true,
    },
    {
      t_seq: 9,
      t_useable: true,
    },
    {
      t_seq: 10,
      t_useable: true,
    },
    {
      t_seq: 11,
      t_useable: true,
    },
    {
      t_seq: 12,
      t_useable: true,
    },
  ],
  reducers: {
    addTable(state, action) {
      state.push({
        t_seq: action,
        t_usable: true,
      });
    },
    tableClick: (state, action) => {
      return state.map((e) =>
        e.id === action.payload ? { ...e, t_usable: !e.t_usable } : e
      );
    },
    // removeCount(state, action) {},
    // addProduct(state, action) {},
  },
});
export const { addTable, tableClick } = tablesSlice.actions;
//store에서 add, remove, complte 액션을 내보낸다.
export default tablesSlice.reducer;
