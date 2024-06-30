export { FilterByGenre } from "./ui/FilterByGenre/FilterByGenre";
export { FilterByYear } from "./ui/FilterByYear/FilterByYear";
export { PaginateMovies } from "./ui/PaginateMovies/PaginateMovies";
export * from "./model/selectors";
export {
  genreChanged,
  yearChanged,
  filterReducer,
  pageChanged,
  totalPagesChanged,
} from "./model/filterSlice";
