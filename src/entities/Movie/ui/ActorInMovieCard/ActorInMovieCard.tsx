import { ActorInMovie } from "../../types/Movie";
import s from "./ActorInMovieCard.module.css";

export const ActorInMovieCard = ({ name, photo }: ActorInMovie) => {
  return (
    <figure className={s.root}>
      <img src={photo} alt={name} className={s.img} />
      <figcaption className={s.caption}>{name}</figcaption>
    </figure>
  );
};
