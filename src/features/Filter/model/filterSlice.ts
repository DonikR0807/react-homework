import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GenresRussian, filterState, years } from "./types";

const initialState: filterState = {
  currentGenre: "Не выбран",
  currentYear: "Не выбран",
  currentPage: 1,
  totalPages: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    genreChanged(state, action: PayloadAction<GenresRussian>) {
      state.currentGenre = action.payload;
    },
    yearChanged(state, action: PayloadAction<years>) {
      state.currentYear = action.payload;
    },
    pageChanged(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    totalPagesChanged(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const { genreChanged, yearChanged, pageChanged, totalPagesChanged } =
  filterSlice.actions;
export const { reducer: filterReducer } = filterSlice;
