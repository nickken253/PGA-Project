import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TableListState, TableListStateItem } from "../../interfaces/tableList.inteface";

const initialState: TableListState = {
  tableList: [
    { title: "TableList 1", description: "TableList 1 Description" },
    { title: "TableList 2", description: "TableList 2 Description" },
    { title: "TableList 3", description: "TableList 3 Description" },
  ],
};

export const tableListSlice = createSlice({
  name: "tableList",
  initialState,
  reducers: {
    addTableList: (state, action: PayloadAction<TableListStateItem>) => {
      state.tableList.push(action.payload);
    },
    removeTableList: (state, action: PayloadAction<number>) => {
      state.tableList.splice(action.payload, 1);
    },
    setTableList: (state, action: PayloadAction<TableListState>) => {
      state.tableList = action.payload.tableList;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTableList, addTableList, removeTableList } = tableListSlice.actions;

export default tableListSlice.reducer;
