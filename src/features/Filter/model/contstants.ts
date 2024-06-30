import { GenresEnglish, GenresRussian, years } from "./types";

export const YEARS: Record<years, years> = {
  "Не выбран": "Не выбран",
  "2009": "2009",
  "2008": "2008",
  "2007": "2007",
  "2006": "2006",
  "1990-2005": "1990-2005",
  "1950-1989": "1950-1989",
};

export const GENRES: Record<GenresEnglish, GenresRussian> = {
  not_selected: "Не выбран",
  comedy: "Комедия",
  drama: "Драма",
  action: "Боевик",
  thriller: "Триллер",
  horror: "Ужасы",
  family: "Семейный",
  cartoon: "Анимированный",
  fantasy: "Фэнтези",
  romance: "Романтика",
  adventure: "Приключения",
  musical: "Мьюзикл",
  war: "Военный",
};
