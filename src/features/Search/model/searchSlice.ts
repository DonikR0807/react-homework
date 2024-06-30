import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { searchIState } from "./types";

const initialState: searchIState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchValueChanged(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { searchValueChanged } = searchSlice.actions;
export const { reducer: searchReducer } = searchSlice;
