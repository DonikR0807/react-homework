import { FilterSection } from "src/widgets/FilterSection";
import s from "./MainPage.module.css";
import { Search } from "src/features/Search";
import { MovieList } from "src/widgets/MovieList";

export const MainPage = () => {
  return (
    <section className={s.root}>
      <FilterSection></FilterSection>
      <div className={s.contentContainer}>
        <div className={s.inputContainer}>
          <Search></Search>
        </div>
        <div className={s.movieListContainer}>
          <MovieList></MovieList>
        </div>
      </div>
    </section>
  );
};
