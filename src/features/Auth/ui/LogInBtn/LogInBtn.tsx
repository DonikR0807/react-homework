import React from "react";
import { Button } from "src/shared/ui";
import { AuthForm } from "../AuthForm/AuthForm";

export const LogInBtn = () => {
  const [authOpen, setAuthOpen] = React.useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setAuthOpen((prev) => !prev)}>
        Войти
      </Button>
      <AuthForm open={authOpen} onClose={() => setAuthOpen(false)}></AuthForm>
    </>
  );
};
