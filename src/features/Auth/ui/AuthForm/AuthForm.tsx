import { Button, Input, Modal } from "src/shared/ui";
import s from "./AuthForm.module.css";
import React, { FormEvent } from "react";
import { authThunk } from "../../model/authThunk";
import { REQUEST_STATUSES, useAppDispatch } from "src/shared/lib";
import { useSelector } from "react-redux";
import { selectAuthIsFailed, selectAuthIsPending } from "../../model/selectors";
import classNames from "classnames";
import { authStatusChanged } from "../../model/userSlice";

interface AuthFormProps {
  open: boolean;
  onClose: () => void;
}

export const AuthForm = ({ onClose, open }: AuthFormProps) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const authIsPending = useSelector(selectAuthIsPending);
  const authIsFailed = useSelector(selectAuthIsFailed);
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(authThunk({ username, password }))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCancelClick() {
    dispatch(authStatusChanged(REQUEST_STATUSES.idle));
    setUsername("");
    setPassword("");
    onClose();
  }

  return (
    <Modal open={open} title="Авторизация" onClose={handleCancelClick}>
      <form className={s.form} onSubmit={handleSubmit}>
        <Input
          id="username"
          label="Логин"
          name="username"
          required
          placeholder="Введите логин"
          containerStyles={{
            border: "1px solid #e1e3e6",
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          containerStyles={{
            border: "1px solid #e1e3e6",
          }}
          name="password"
          id="password"
          label="Пароль"
          required
          placeholder="Введите пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <div className={s.controls}>
          <Button
            variant="contained"
            disabled={authIsPending}
            style={{
              cursor: authIsPending ? "not-allowed" : "pointer",
            }}
          >
            {authIsPending ? ".........." : "Войти"}
          </Button>
          <Button variant="outlined" type="button" onClick={handleCancelClick}>
            Отменить
          </Button>
        </div>
        <p className={classNames(s.authMessage, authIsFailed ? s.visible : "")}>
          {authIsFailed ? "Ошибка! Попробуйте ещё раз" : ""}
        </p>
      </form>
    </Modal>
  );
};
