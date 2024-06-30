import { ReactNode } from "react";
import { FullMovieInfo } from "../../types/Movie";
import s from "./MovieFull.module.css";

interface MovieFullProps extends FullMovieInfo {
  children?: ReactNode;
}

export const MovieFull = ({
  title,
  genre,
  release_year,
  rating,
  poster,
  description,
}: MovieFullProps) => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <img className={s.img} src={poster} alt={title}></img>
        <div className={s.infoContainer}>
          <h1 className={s.title}>{title}</h1>
          <ul>
            <li className={s.detail}>
              Жанр: <span className={s.info}>{genre}</span>
            </li>
            <li className={s.detail}>
              Год выпуска: <span className={s.info}>{release_year}</span>
            </li>
            <li className={s.detail}>
              Рейтинг: <span className={s.info}>{rating}</span>
            </li>
            <li className={s.detail}>
              Описание
              <p className={s.description}>{description}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
