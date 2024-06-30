export type GenresEnglish =
  | "not_selected"
  | "action"
  | "comedy"
  | "drama"
  | "thriller"
  | "horror"
  | "family"
  | "cartoon"
  | "fantasy"
  | "romance"
  | "adventure"
  | "musical"
  | "war";

export type GenresRussian =
  | "Не выбран"
  | "Комедия"
  | "Драма"
  | "Боевик"
  | "Триллер"
  | "Ужасы"
  | "Семейный"
  | "Анимированный"
  | "Фэнтези"
  | "Романтика"
  | "Приключения"
  | "Мьюзикл"
  | "Военный";

export type years =
  | "2009"
  | "2008"
  | "2007"
  | "2006"
  | "1990-2005"
  | "1950-1989"
  | "Не выбран";

export interface filterState {
  currentGenre: GenresRussian;
  currentYear: years;
  currentPage: number;
  totalPages: number;
}
