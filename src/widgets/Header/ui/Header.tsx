import { Link } from "react-router-dom";
import s from "./Header.module.css";
import { Button } from "src/shared/ui";
import ProfileIcon from "src/shared/assets/icons/profile.svg?react";
import { LogInBtn, selectIsAuthorized } from "src/features/Auth";
import { useSelector } from "react-redux";

export const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

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
            <Button variant="outlined">Выйти</Button>
          </div>
        ) : (
          <LogInBtn></LogInBtn>
        )}
      </div>
    </header>
  );
};
