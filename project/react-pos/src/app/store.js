import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import tableReducer from "../features/table/tableSlice";
import tablesReducer from "../features/table/tablesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    table: tableReducer,
    tables: tablesReducer,
  },
});
