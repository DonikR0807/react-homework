import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { Button } from "src/shared/ui";
import ProfileIcon from "src/shared/assets/icons/profile.svg?react";
import { LogInBtn, LogoutBtn, selectIsAuthorized } from "src/features/Auth";
import { useDispatch, useSelector } from "react-redux";
import { resetRatings } from "src/features/RateMovie/model/ratedMoviesSlice";

export const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <Link to={"/"} className={s.link}>
        <h1 className={s.title}>Фильмопоиск</h1>
      </Link>
      <div>
        {isAuthorized ? (
          <div className={s.container}>
            <Button
              style={{
                backgroundColor: "var(--white-text)",
                borderRadius: "50%",
                padding: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 40,
                height: 40,
                boxSizing: "border-box",
              }}
              variant="text"
            >
              <ProfileIcon className={s.profileIcon}></ProfileIcon>
            </Button>
            <LogoutBtn onLogout={() => dispatch(resetRatings())}></LogoutBtn>
          </div>
        ) : (
          <LogInBtn></LogInBtn>
        )}
      </div>
    </header>
  );
};
