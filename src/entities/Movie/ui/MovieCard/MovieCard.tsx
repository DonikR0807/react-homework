import { ReactNode } from "react";
import { ShortMovieInfo } from "../../types/Movie";
import s from "./MovieCard.module.css";
import { Link } from "react-router-dom";

interface MovieCardProps extends ShortMovieInfo {
  children?: ReactNode;
}

export const MovieCard = ({
  children,
  poster,
  genre,
  description,
  release_year,
  id,
  title,
}: MovieCardProps) => {
  return (
    <Link to={`movie/${id}`} style={{ textDecoration: "none" }}>
      <div className={s.root}>
        <div className={s.contentContainer}>
          <div className={s.infoSection}>
            <img src={poster} alt={title} className={s.img}></img>
            <div>
              <p className={s.title}>{title}</p>
              <div className={s.flex}>
                <div className={s.detailsContainer}>
                  <p className={s.detail}>Жанр</p>
                  <p className={s.detail}>Год выпуска</p>
                  <p className={s.detail}>Описание</p>
                </div>
                <div className={s.infoContainer}>
                  <p className={s.info}>{genre}</p>
                  <p className={s.info}>{release_year}</p>
                  <p className={s.info}>{description}</p>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </Link>
  );
};
